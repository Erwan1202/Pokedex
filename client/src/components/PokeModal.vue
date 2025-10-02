<template>
  <div v-if="open" class="fixed inset-0 bg-black/40 grid place-items-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-2xl p-6 w-[min(520px,92vw)]">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-2xl font-bold">{{ p.name }}</h3>
        <button @click="$emit('close')" aria-label="Close" class="text-xl">✕</button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img :src="p.sprite" class="w-32 h-32" />
        <ul class="text-sm space-y-1">
          <li><b>Types:</b> {{ p.types.join(", ") }}</li>
          <li><b>Height:</b> {{ p.height }} m</li>
          <li><b>Weight:</b> {{ p.weight }} kg</li>
          <li><b>Abilities:</b> {{ p.abilities.join(", ") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ open: Boolean, p: Object })
</script>
