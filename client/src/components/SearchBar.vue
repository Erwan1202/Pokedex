<template>
  <div class="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl lg:max-w-4xl mx-auto">
      <div class="relative">
        <svg class="pointer-events-none absolute left-3 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 
                    h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          v-model="qLocal"
          @input="$emit('update:q', qLocal)"
          type="text"
          placeholder="Find your pokémon..."
          class="w-full h-10 sm:h-11 lg:h-12 rounded-full bg-white 
                 pl-10 sm:pl-11 lg:pl-12 pr-4 sm:pr-5
                 text-sm sm:text-base lg:text-[17px] leading-none text-gray-700 placeholder-gray-400
                 ring-1 ring-gray-200 hover:ring-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none
                 shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-200
                 sm:shadow-[0_4px_12px_rgba(0,0,0,0.06)] lg:shadow-[0_6px_16px_rgba(0,0,0,0.08)]"/>
      </div>

      <div class="mt-3 sm:mt-4 lg:mt-5 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        <FilterDropdown
          label="Type"
          :items="typeOptions"
          type="checkbox"
          v-model="selectedTypes"/>

        <FilterDropdown
          label="Attack"
          :items="attackOptions"
          type="radio"
          v-model="selectedAttack"/>

        <FilterDropdown
          label="Experience"
          :items="xpOptions"
          type="radio"
          v-model="selectedXP"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import FilterDropdown from './FilterDropDown.vue'

const emit = defineEmits(['update:q', 'update:filters'])

const qLocal = ref('')

const typeOptions = [
  { id: 'fire', label: 'Fire' },
  { id: 'normal', label: 'Normal' },
  { id: 'electric', label: 'Electric' },
  { id: 'water', label: 'Water' },
  { id: 'grass', label: 'Grass' },
  { id: 'poison', label: 'Poison' },
]
const attackOptions = [
  { id: 'atk-desc', label: 'High to low' },
  { id: 'atk-asc',  label: 'Low to high' },
]
const xpOptions = [
  { id: 'xp-desc', label: 'High to low' },
  { id: 'xp-asc',  label: 'Low to high' },
]

const selectedTypes  = ref([])
const selectedAttack = ref(null)
const selectedXP     = ref(null)

watch([selectedTypes, selectedAttack, selectedXP], () => {
  const filters = {
    types: [...selectedTypes.value],
    attack: selectedAttack.value,
    xp: selectedXP.value
  }
  emit('update:filters', filters)
}, { deep: true })
</script>
