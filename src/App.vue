<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="bg-white shadow">
      <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold">German Quiz — A1 · A2 · B1</h1>
        <nav class="space-x-3">
          <router-link to="/" class="text-sm text-blue-600 hover:underline">Home</router-link>
        </nav>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <router-view />
    </main>

    <footer class="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
      Built with Vue 3 + Tailwind
    </footer>
  </div>
</template>

<script setup></script>
