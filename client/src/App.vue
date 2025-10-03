<template>
  <div class="min-h-screen bg-[#F5DB13]">
    <!-- Header -->
    <header v-if="route.name !== 'NotFound'" class="relative bg-[#F5DB13] shadow-[00px_4px_6px_rgba(0,0,0,0.1)] border-b border-[#E6C200]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-[93px] relative">
          
          <!-- Logo container - Position absolue à gauche -->
          <div class="absolute left-4 sm:left-6 lg:left-8 flex items-center">
            <div class="transform hover:scale-105 transition-transform duration-300 ease-in-out" style="margin-top: 14px;">
              <img 
                src="./assets/Header_assets/Logo.png" 
                alt="Pokémon" 
                class="drop-shadow-lg filter brightness-100 contrast-105 w-[120px] h-[48px] sm:w-[140px] sm:h-[56px] lg:w-[157px] lg:h-[63px]"
              />
            </div>
          </div>
          
          <!-- Navigation Desktop - Centrée -->
          <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <RouterLink 
              to="/" 
              class="relative px-3 xl:px-4 py-2 font-normal text-black hover:text-gray-700 transition-all duration-300 ease-in-out group whitespace-nowrap"
              style="font-family: 'Karla', sans-serif; font-size: clamp(20px, 2.5vw, 25px); font-weight: 400; line-height: 100%; letter-spacing: 0%;"
            >
              <span class="relative z-10">Home</span>
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
            
            <RouterLink 
              to="/pokedex" 
              class="relative px-3 xl:px-4 py-2 font-normal text-black hover:text-gray-700 transition-all duration-300 ease-in-out group whitespace-nowrap"
              style="font-family: 'Karla', sans-serif; font-size: clamp(20px, 2.5vw, 25px); font-weight: 400; line-height: 100%; letter-spacing: 0%;"
            >
              <span class="relative z-10">Pokédex</span>
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
          </nav>
          
          <!-- Burger Menu - Position absolue à droite (responsive uniquement) -->
          <div class="absolute right-4 sm:right-6 lg:hidden">
            <button 
              @click="toggleMobileMenu" 
              class="p-2 rounded-lg text-black hover:text-gray-700 hover:bg-yellow-300 transition-colors duration-200"
              :class="{ 'bg-yellow-300': isMobileMenuOpen }"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden absolute top-full left-0 right-0 bg-[#F5DB13] border-t border-[#E6C200] shadow-lg z-50"
        >
          <nav class="px-4 py-4 space-y-2">
            <RouterLink 
              to="/" 
              @click="closeMobileMenu"
              class="block px-4 py-3 font-normal text-black hover:text-gray-700 hover:bg-yellow-300 rounded-lg transition-all duration-300 ease-in-out"
              style="font-family: 'Karla', sans-serif; font-size: 22px; font-weight: 400; line-height: 100%; letter-spacing: 0%;"
            >
              Home
            </RouterLink>
            
            <RouterLink 
              to="/pokedex" 
              @click="closeMobileMenu"
              class="block px-4 py-3 font-normal text-black hover:text-gray-700 hover:bg-yellow-300 rounded-lg transition-all duration-300 ease-in-out"
              style="font-family: 'Karla', sans-serif; font-size: 22px; font-weight: 400; line-height: 100%; letter-spacing: 0%;"
            >
              Pokédex
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <main><RouterView /></main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
