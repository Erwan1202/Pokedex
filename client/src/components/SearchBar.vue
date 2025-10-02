<template>
  <div class="flex gap-2">
    <input v-model="qLocal" @input="$emit('update:q', qLocal)" type="text"
      placeholder="Search by name or ability"
      class="w-full border rounded-xl px-4 py-2 outline-none" />
    <select v-model="typeLocal" @change="$emit('update:type', typeLocal)" class="border rounded-xl px-3">
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
