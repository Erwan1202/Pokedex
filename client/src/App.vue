<template>
  <div class="min-h-screen bg-yellow-400">
    <!-- Header masqué uniquement sur la page NotFound -->
    <header v-if="route.name !== 'NotFound'" class="px-8 py-6 flex items-center justify-between">
      <div class="flex items-center">
        <!-- Logo Pokémon officiel -->
        <img src="./assets/Header_assets/Logo.png" alt="Pokémon" class="h-12" />
      </div>
      <nav class="flex gap-12 text-lg font-semibold">
        <RouterLink to="/" class="text-gray-900 hover:text-gray-700 transition-colors duration-200 relative">
          Home
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transform origin-left transition-transform duration-200"></div>
        </RouterLink>
        <RouterLink to="/pokedex" class="text-gray-900 hover:text-gray-700 transition-colors duration-200 relative">
          Pokédex
        </RouterLink>
      </nav>
    </header>
    <main><RouterView /></main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
