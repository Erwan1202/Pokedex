<template>
  <article @click="$emit('open', pokemon)"
    class="rounded-2xl p-6 shadow-md cursor-pointer border hover:scale-105 transition"
    :style="{ backgroundColor: pokemon.color || '#fff' }">
    <div class="flex items-center justify-between text-white drop-shadow">
      <h3 class="font-bold text-xl">{{ pokemon.name }}</h3>
      <span class="text-sm">#{{ pokemon.id }}</span>
    </div>
    <img :src="pokemon.sprite" alt="" class="w-28 h-28 my-3 mx-auto" />
    <div class="flex gap-2 justify-center">
      <span v-for="t in pokemon.types" :key="t"
        class="text-xs bg-white/80 text-black rounded px-3 py-1 font-semibold shadow">
      {{ t }}
      </span>
    </div>
  </article>

</template>

<script setup>
defineProps({ pokemon: { type: Object, required: true } })
</script>
