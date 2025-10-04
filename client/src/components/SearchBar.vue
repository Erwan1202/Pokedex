<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-[min(920px,88vw)] mx-auto">
      <div class="relative">
        <svg class="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          v-model="qLocal"
          @input="$emit('update:q', qLocal)"
          type="text"
          placeholder="Find your pokémon..."
          class="w-full h-12 rounded-full bg-white pl-12 pr-5
                 text-[17px] leading-none text-gray-700 placeholder-gray-400
                 ring-1 ring-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none
                 shadow-[0_6px_16px_rgba(0,0,0,0.08)]"/>
      </div>

      <div class="mt-5 flex gap-3">
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
