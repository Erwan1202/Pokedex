<template>
  <article @click="$emit('open', pokemon)"
    class="rounded-2xl p-4 shadow cursor-pointer border"
    :style="{ backgroundColor: pokemon.color || '#fff' }">
    <div class="flex items-center justify-between">
      <h3 class="font-bold text-lg">{{ pokemon.name }}</h3>
      <span class="text-sm opacity-80">#{{ pokemon.id }}</span>
    </div>
    <img :src="pokemon.sprite" alt="" class="w-24 h-24 my-2" />
    <div class="flex gap-2">
      <span v-for="t in pokemon.types" :key="t"
            class="text-xs bg-white/70 rounded px-2 py-0.5">{{ t }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({ pokemon: { type: Object, required: true } })
</script>
