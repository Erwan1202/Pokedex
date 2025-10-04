<template>
  <!-- Backdrop --> 
  <div v-if="open" class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click.self="$emit('close')"></div>

  <!-- Modal Container-->
  <div v-if="open" class="fixed inset-0 grid place-items-center">
    <!-- X au-dessus du modal -->
    <button @click="$emit('close')" 
            class="absolute top-35 right-90 grid place-items-center w-10 h-10 rounded-full z-50">
      <img src="../assets/Modal_assets/close.png" alt="Close Modal" class="w-6 h-6" />
    </button>

    <!-- Modal -->
    <div class="relative w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-2xl"
                :style="{ background: p.gradient
          ? `linear-gradient(to bottom, #732119 0%, ${p.gradient[1]} 100%)`
          : p.color || '#D9D9D9' }">

      <!-- Grill -->
      <div class="grid grid-cols-[45%_1fr] h-full">
        
        <!-- Colonne IMAGE -->
        <div class="relative h-full"
            :style="{
            background: p.gradient
              ? `linear-gradient(to bottom, ${p.gradient[0]} 0%, ${p.gradient[1]} 100%)`
              : p.color || '#D9D9D9'
            }"
        >
          <img
            :src="p.sprite"
            :alt="p.name"
            class="absolute top-20 w-[90%] select-none pointer-events-none
                   drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]" />
          
          <!-- Tags type -->
          <div class="absolute bottom-4 right-[5%] flex gap-2">
            <span v-for="type in p.types" :key="type"
                    :style="{ background: getTypeColor(type), color: '#222' }"
                  class="h-4 px-2 rounded-full text-[11px] font-semibold
                     inline-flex items-center justify-center"
            >{{ type }}
          </span>
          </div>
        </div>

        <!-- Colonne CONTENU -->
        <div class="relative z-10 px-[5%] pt-[3%]">
          
          <!-- Header d'une ligne -->
          <div class="flex items-center justify-between">
            <h2 class="text-white font-bold text-[2.5rem] leading-none">
              {{ p.name }}
            </h2>
            <div class="flex items-center gap-3">
              <span class="text-white/90 text-sm">Generation {{ p.generation || 1 }}</span>
              <span class="grid place-items-center w-8 h-8 rounded-full bg-[#F5DB13]
                           text-black font-semibold text-xs">#{{ p.id }}</span>
            </div>
          </div>

          <!-- Abilities (micro-carte) -->
          <div class="mt-[3%] rounded-lg bg-white px-[4%] py-[2%] shadow-sm">
            <div class="text-[0.8rem] font-semibold text-black/70">Abilities</div>
            <div class="text-[0.9rem] text-black">
              {{ p.abilities?.join(' – ') || 'Blaze – Solar Power' }}
            </div>
          </div>

          <!-- HP/XP côte à côte -->
          <div class="mt-3 flex gap-3">
            <!-- HP -->
            <div class="flex-1 rounded-lg bg-white px-[4%] py-[3%] shadow-sm">
              <div class="text-[0.8rem] font-semibold text-black/70">Healthy Points</div>
              <div class="text-[0.9rem] font-semibold">{{ p.hp || '1 000 000' }}</div>
              <div class="mt-2 h-2 rounded bg-black/10 overflow-hidden">
                <div class="h-full w-[70%] bg-green-500 rounded-[inherit]"></div>
              </div>
            </div>
            <!-- XP -->
            <div class="flex-1 rounded-lg bg-white px-[4%] py-[3%] shadow-sm">
              <div class="text-[0.8rem] font-semibold text-black/70">Experience</div>
              <div class="text-[0.9rem] font-semibold">{{ p.experience || '1 000 000' }}</div>
              <div class="mt-2 h-2 rounded bg-black/10 overflow-hidden">
                <div class="h-full w-[60%] bg-yellow-400 rounded-[inherit]"></div>
              </div>
            </div>
          </div>

          <!-- Stats: 4 ronds -->
          <div class="mt-4 flex items-end gap-4">
            <div class="text-center bg-white place-items-center p-2 rounded-lg shadow-sm">
              <div class="grid place-items-center w-12 h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-[0.75rem]">{{ p.defense || 49 }}</div>
              <div class="mt-1 text-[0.7rem] text-black/90">Defense</div>
            </div>
            <div class="text-center bg-white place-items-center p-2 rounded-lg shadow-sm">
              <div class="grid place-items-center w-12 h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-[0.75rem]">{{ p.attack || 165 }}</div>
              <div class="mt-1 text-[0.7rem] text-black/90">Attack</div>
            </div>
            <div class="text-center bg-white place-items-center p-2 rounded-lg shadow-sm">
              <div class="grid place-items-center w-12 h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-[0.75rem]">{{ p.special_attack || 130 }}</div>
              <div class="mt-1 text-[0.7rem] text-black/90">Sp Attack</div>
            </div>
            <div class="text-center bg-white place-items-center p-2 rounded-lg shadow-sm">
              <div class="grid place-items-center w-12 h-12 aspect-square rounded-full bg-white opacity-100 ring-2 ring-black
                          font-bold text-black text-[0.75rem]">{{ p.special_defense || 271 }}</div>
              <div class="mt-1 text-[0.7rem] text-black/90">Sp Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import typeColors from '../../../serveur/data/typeColors.json'

defineProps({ open: Boolean, p: Object })
defineEmits(['close'])

// Fonction pour obtenir la couleur selon le type
const getTypeColor = (type) => {
  return typeColors[type.toLowerCase()] || typeColors.default
}
</script>