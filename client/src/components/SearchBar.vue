<template>
  <div class="flex gap-2 max-w-4xl mx-auto" style="width: min(69.44vw, 1000px); height: min(3.71vh, 38px);">
    <input v-model="qLocal" @input="$emit('update:q', qLocal)" type="text"
      placeholder="Encuentra tu pokémon..."
      class="flex-1 border-2 border-purple-400 rounded-xl px-4 py-2 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-gray-700 placeholder-gray-500"
      style="font-size: min(1.11vw, 16px);" />
    <select v-model="typeLocal" @change="$emit('update:type', typeLocal)" 
      class="border-2 border-purple-400 rounded-xl px-3 py-2 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 bg-white text-gray-700 min-w-0"
      style="font-size: min(1.11vw, 16px); width: min(6.94vw, 100px);">
      <option value="">All types</option>
      <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ types: { type: Array, default: () => [] } })
const qLocal = ref('')
const typeLocal = ref('')
</script>
