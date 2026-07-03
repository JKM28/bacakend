import 'dotenv/config';
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/check-sentence", async (req, res) => {
  const { userSentence, expectedAnswer } = req.body;

  const prompt = `
  Is the student's sentence equivalent to the expected answer?
  Reply only with "correct" or "wrong".

  Student: "${userSentence}"
  Expected: "${expectedAnswer}"
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text().toLowerCase();

    console.log("Gemini reply:", text);

    if (text.includes("correct")) {
      res.json({ feedback: "✅ Correct!" });
    } else if (text.includes("wrong")) {
      res.json({ feedback: "❌ Wrong." });
    } else {
      const normalized = (userSentence || "").trim().toLowerCase();
      const correct = (expectedAnswer || "").trim().toLowerCase();
      const isCorrect = normalized === correct;
      res.json({ feedback: isCorrect ? "✅ Correct!" : "❌ Wrong." });
    }
  } catch (err) {
    console.error("Gemini error:", err);
    const normalized = (userSentence || "").trim().toLowerCase();
    const correct = (expectedAnswer || "").trim().toLowerCase();
    const isCorrect = normalized === correct;
    res.json({ feedback: isCorrect ? "✅ Correct!" : "❌ Wrong (AI unavailable)." });
  }
});

// NEW: open-ended writing evaluation against a rubric
app.post("/check-writing", async (req, res) => {
  const { userText, prompt: questionPrompt, rubric } = req.body;

  if (!userText || !userText.trim()) {
    return res.json({
      passed: false,
      feedback: "No response was written."
    });
  }

  const gradingPrompt = `
You are a supportive German language teacher grading a student's short written response.

Question given to the student: "${questionPrompt}"
Grading criteria: ${rubric}

Student's response:
"""
${userText}
"""

Evaluate the response against the criteria. Be encouraging but honest about errors.
Respond with ONLY valid JSON, no markdown code fences, no extra text, in exactly this shape:
{"meets_length": true or false, "addresses_prompt": true or false, "grammar_ok": true or false, "feedback": "2-3 sentences of constructive feedback in English, written directly to the student, mentioning at least one specific strength and one specific thing to improve if applicable"}
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(gradingPrompt);
    let raw = result.response.text().trim();

    // strip accidental markdown fences just in case
    raw = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();

    console.log("Gemini writing reply:", raw);

    const parsed = JSON.parse(raw);
    const passed = Boolean(parsed.meets_length && parsed.addresses_prompt && parsed.grammar_ok);

    res.json({
      passed,
      feedback: parsed.feedback || "Response evaluated."
    });
  } catch (err) {
    console.error("Gemini writing-check error:", err);
    res.json({
      passed: null,
      feedback: "Response saved. AI feedback is currently unavailable."
    });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));