<template>
  <div class="space-y-6">
    <section class="bg-white p-6 rounded shadow">
      <h2 class="text-2xl font-bold mb-2">German Language Exam</h2>
      <p class="text-sm text-gray-600 mb-4">Choose a level to start the general quiz. This is separate from the Verb + Prepositions topic.</p>

      <div class="flex gap-3 flex-wrap">
        <router-link to="/level/A1" class="px-4 py-2 bg-blue-600 text-white rounded">A1</router-link>
        <router-link to="/level/A2" class="px-4 py-2 bg-indigo-600 text-white rounded">A2</router-link>
        <router-link to="/level/B1" class="px-4 py-2 bg-green-600 text-white rounded">B1</router-link>
      </div>
    </section>

    <section class="bg-white p-6 rounded shadow">
      <h3 class="font-semibold">Quick start</h3>
      <ol class="list-decimal list-inside mt-2 text-sm text-gray-700">
        <li>Pick a level</li>
        <li>Answer questions from the general exam bank</li>
        <li>See your score summary at the end</li>
      </ol>
    </section>
  </div>
</template>

<script setup></script>