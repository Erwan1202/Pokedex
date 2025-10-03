<template>
  <div class="min-h-screen bg-[#F5DB13]">
    <!-- Header -->
    <header v-if="route.name !== 'NotFound'" class="relative bg-[#F5DB13] shadow-[00px_4px_6px_rgba(0,0,0,0.1)] border-b border-[#E6C200] z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-center h-[93px] relative">
          <!-- Logo container -->
          <div class="absolute left-0 flex items-center">
            <div class="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out" style="margin-top: 14px;">
              <!-- Logo Pokémon -->
              <img 
                src="./assets/Header_assets/Logo.png" 
                alt="Pokémon" 
                class="drop-shadow-lg filter brightness-100 contrast-105" 
                style="width: 157px; height: 63px;"
              />
            </div>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <RouterLink 
              to="/" 
              class="relative px-4 py-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out group"
            >
              <span class="relative z-10">Home</span>
              <!-- Ligne -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <!-- Ombre  -->
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
            
            <RouterLink 
              to="/pokedex" 
              class="relative px-4 py-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out group"
            >
              <span class="relative z-10">Pokédex</span>
              <!-- Ligne -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <!-- Ombre  -->
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </RouterLink>
          </nav>
          
          <!-- Menu mobile (hamburger) pour responsivité - positionné à droite -->
          <div class="absolute right-0 md:hidden">
            <button 
              @click="toggleMobileMenu"
              class="p-2 rounded-lg text-gray-900 hover:text-gray-700 hover:bg-yellow-300 transition-colors duration-200 relative z-50"
              :class="{ 'bg-yellow-300': isMobileMenuOpen }"
            >
              <!-- Icône hamburger / X -->
              <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span 
                  class="block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
                ></span>
                <span 
                  class="block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="isMobileMenuOpen ? 'opacity-0' : ''"
                ></span>
                <span 
                  class="block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Menu mobile overlay -->
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="closeMobileMenu"
      ></div>

      <!-- Menu mobile -->
      <div 
        class="fixed top-[93px] right-0 w-80 h-[calc(100vh-93px)] bg-[#F5DB13] shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden border-l border-[#E6C200]"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Contenu du menu -->
        <div class="p-6 h-full flex flex-col">
          <!-- Navigation links -->
          <nav class="space-y-6">
            <RouterLink 
              to="/" 
              @click="closeMobileMenu"
              class="block w-full text-left px-4 py-3 text-xl font-bold text-gray-900 hover:text-gray-700 hover:bg-yellow-300 rounded-lg transition-all duration-200"
              :class="{ 'bg-yellow-300 text-gray-700': route.path === '/' }"
            >
              Home
            </RouterLink>
            
            <RouterLink 
              to="/pokedex" 
              @click="closeMobileMenu"
              class="block w-full text-left px-4 py-3 text-xl font-bold text-gray-900 hover:text-gray-700 hover:bg-yellow-300 rounded-lg transition-all duration-200"
              :class="{ 'bg-yellow-300 text-gray-700': route.path === '/pokedex' }"
            >
              Pokédex
            </RouterLink>
          </nav>

          <!-- Decorative elements -->
          <div class="flex-1 flex items-end justify-center pb-8">
            <div class="text-center">
              <p class="text-sm font-medium text-gray-700 opacity-70">Gotta catch 'em all!</p>
            </div>
          </div>
        </div>
      </div>
      
    </header>
    <main><RouterView /></main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fermer le menu quand on change de route
watch(route, () => {
  closeMobileMenu()
})

// Empêcher le scroll quand le menu est ouvert
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
