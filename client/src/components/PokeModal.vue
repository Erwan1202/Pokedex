<template>
  <!-- Backdrop --> 
  <div v-if="open" class="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-40" @click.self="$emit('close')"></div>
      
  <!-- Modal Container-->
  <div v-if="open" class="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50">
    <!-- X Button -->
      <button @click="$emit('close')" 
              class="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-10 md:right-10
                     grid place-items-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 
                     rounded-full bg-black/20 hover:bg-black/30
                     transition-colors z-50">
        <img src="../assets/Modal_assets/close.png" alt="Close Modal" 
             class="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
      </button>
    <!-- Modal -->
    <div class="relative w-full max-w-4xl h-full max-h-[95vh] sm:max-h-[90vh] md:h-auto md:max-h-[600px] 
                rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl"
                :style="{ background: p.gradient
          ? `linear-gradient(to bottom, #732119 0%, ${p.gradient[1]} 100%)`
          : p.color || '#D9D9D9' }">


      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-[45%_1fr] h-full min-h-[450px] sm:min-h-[500px]">
        
        <!-- Colonne IMAGE -->
        <div class="relative h-48 sm:h-64 md:h-full"
            :style="{
            background: p.gradient
              ? `linear-gradient(to bottom, ${p.gradient[0]} 0%, ${p.gradient[1]} 100%)`
              : p.color || '#D9D9D9'
            }"
        >
          <img
            :src="p.sprite"
            :alt="p.name"
            class="absolute top-8 sm:top-12 md:top-20 w-[80%] sm:w-[90%] md:w-[90%] 
                   left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2
                   select-none pointer-events-none
                   drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)] sm:drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]" />
          
          <!-- Tags type -->
          <div class="absolute bottom-2 sm:bottom-4 right-[5%] flex gap-1 sm:gap-2">
            <span v-for="type in p.types" :key="type"
                    :style="{ background: getTypeColor(type), color: '#222' }"
                  class="h-3 sm:h-4 px-1.5 sm:px-2 rounded-full text-[10px] sm:text-[11px] font-semibold
                     inline-flex items-center justify-center"
            >{{ type }}
          </span>
          </div>
        </div>

        <!-- Colonne CONTENU -->
        <div class="relative z-10 px-4 sm:px-[5%] pt-4 sm:pt-[3%] pb-4">
          
          <!-- Header d'une ligne -->
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h2 class="text-white font-bold text-2xl sm:text-3xl md:text-[2.5rem] leading-none">
              {{ p.name }}
            </h2>
            <div class="flex items-center gap-2 sm:gap-3">
              <span class="text-white/90 text-xs sm:text-sm">Generation {{ p.generation || 1 }}</span>
              <span class="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5DB13]
                           text-black font-semibold text-xs">#{{ p.id }}</span>
            </div>
          </div>

          <!-- Abilities (micro-carte) -->
          <div class="mt-3 sm:mt-[3%] rounded-lg bg-white px-3 sm:px-[4%] py-2 sm:py-[2%] shadow-sm">
            <div class="text-xs sm:text-[0.8rem] font-semibold text-black/70">Abilities</div>
            <div class="text-sm sm:text-[0.9rem] text-black">
              {{ p.abilities?.join(' – ') || 'Blaze – Solar Power' }}
            </div>
          </div>

          <!-- HP/XP côte à côte -->
          <div class="mt-2 sm:mt-3 flex gap-2 sm:gap-3">
            <!-- HP -->
            <div class="flex-1 rounded-lg bg-white px-3 sm:px-[4%] py-2 sm:py-[3%] shadow-sm">
              <div class="text-xs sm:text-[0.8rem] font-semibold text-black/70">Healthy Points</div>
              <div class="text-sm sm:text-[0.9rem] font-semibold">{{ p.hp || '1 000 000' }}</div>
              <div class="mt-1 sm:mt-2 h-1.5 sm:h-2 rounded bg-black/10 overflow-hidden">
                <div class="h-full w-[70%] bg-green-500 rounded-[inherit]"></div>
              </div>
            </div>
            <!-- XP -->
            <div class="flex-1 rounded-lg bg-white px-3 sm:px-[4%] py-2 sm:py-[3%] shadow-sm">
              <div class="text-xs sm:text-[0.8rem] font-semibold text-black/70">Experience</div>
              <div class="text-sm sm:text-[0.9rem] font-semibold">{{ p.experience || '1 000 000' }}</div>
              <div class="mt-1 sm:mt-2 h-1.5 sm:h-2 rounded bg-black/10 overflow-hidden">
                <div class="h-full w-[60%] bg-yellow-400 rounded-[inherit]"></div>
              </div>
            </div>
          </div>

          <!-- Stats: 4 ronds -->
          <div class="mt-3 sm:mt-4 flex items-end gap-2 sm:gap-3 md:gap-4 overflow-x-auto">
            <div class="text-center bg-white place-items-center p-1.5 sm:p-2 rounded-lg shadow-sm flex-shrink-0">
              <div class="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-xs sm:text-[0.75rem]">{{ p.defense || 49 }}</div>
              <div class="mt-1 text-[0.6rem] sm:text-[0.7rem] text-black/90">Defense</div>
            </div>
            <div class="text-center bg-white place-items-center p-1.5 sm:p-2 rounded-lg shadow-sm flex-shrink-0">
              <div class="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-xs sm:text-[0.75rem]">{{ p.attack || 165 }}</div>
              <div class="mt-1 text-[0.6rem] sm:text-[0.7rem] text-black/90">Attack</div>
            </div>
            <div class="text-center bg-white place-items-center p-1.5 sm:p-2 rounded-lg shadow-sm flex-shrink-0">
              <div class="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-xs sm:text-[0.75rem]">{{ p.special_attack || 130 }}</div>
              <div class="mt-1 text-[0.6rem] sm:text-[0.7rem] text-black/90">Sp Attack</div>
            </div>
            <div class="text-center bg-white place-items-center p-1.5 sm:p-2 rounded-lg shadow-sm flex-shrink-0">
              <div class="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-xs sm:text-[0.75rem]">{{ p.special_defense || 271 }}</div>
              <div class="mt-1 text-[0.6rem] sm:text-[0.7rem] text-black/90">Sp Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import typeColors from '../../../serveur/data/typeColors.json'
import Pokedex from '../pages/Pokedex.vue'

defineProps({ open: Boolean, p: Object })
defineEmits(['close'])

// Fonction pour obtenir la couleur selon le type
const getTypeColor = (type) => {
  return typeColors[type.toLowerCase()] || typeColors.default
}
</script>