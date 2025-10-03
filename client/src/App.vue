<template>
  <div class="min-h-screen bg-[#F5DB13]">
    <!-- Header professionnel Pokémon avec ombres et espacement précis -->
    <header v-if="route.name !== 'NotFound'" class="relative bg-[#F5DB13] shadow-[0_4px_8px_rgba(0,0,0,0.15)] border-b border-[#E6C200]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-center h-20 relative">
          <!-- Logo container avec espacement précis - positionné à gauche -->
          <div class="absolute left-0 flex items-center space-x-4">
            <div class="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <!-- Logo Pokémon avec taille optimisée et ombre -->
              <img 
                src="./assets/Header_assets/Logo.png" 
                alt="Pokémon" 
                class="h-16 w-auto drop-shadow-lg filter brightness-100 contrast-105" 
              />
            </div>
          </div>
          
          <!-- Navigation centrée avec espacement et effets précis -->
          <nav class="hidden md:flex items-center space-x-8">
            <RouterLink 
              to="/" 
              class="relative px-4 py-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out group"
            >
              <span class="relative z-10">Home</span>
              <!-- Ligne de soulignement animée -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <!-- Ombre subtile au hover -->
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
            
            <RouterLink 
              to="/pokedex" 
              class="relative px-4 py-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out group"
            >
              <span class="relative z-10">Pokédex</span>
              <!-- Ligne de soulignement animée -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <!-- Ombre subtile au hover -->
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
          </nav>
          
          <!-- Menu mobile (hamburger) pour responsivité - positionné à droite -->
          <div class="absolute right-0 md:hidden">
            <button class="p-2 rounded-lg text-gray-900 hover:text-gray-700 hover:bg-yellow-300 transition-colors duration-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Ombre subtile en bas du header -->
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6C200] opacity-60"></div>
    </header>
    <main><RouterView /></main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
