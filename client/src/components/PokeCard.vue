<template>
  <article
    class="pokemon-card relative cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-black"
    :style="{ '--pokemon-color': pokemon.color || '#D9D9D9', backgroundColor: '#F6F7F9' }"
    @click="$emit('open', pokemon)"
  >
    
    <!-- Carré coloré avec gradient et image -->
    <section
      class="pokemon-gradient-box absolute z-20"
      :style="{
        width: '70%',
        height: '100%',
        left: '30%',
        top: '0',
        borderRadius: '6px',
        opacity: 1,
        background: `linear-gradient(135deg, ${pokemon.color || '#D9D9D9'} 0%, rgba(255,255,255,0.3) 50%, ${pokemon.color || '#D9D9D9'} 100%)`
      }"
    >
      <div class="pokemon-image absolute inset-0">
        <img :src="pokemon.sprite" :alt="pokemon.name" class="w-full h-full object-contain" />
      </div>
    </section>
    
    <div class="shadow-layer absolute inset-0 rounded-[inherit] shadow-lg"></div>
    
    <div class="p-4 text-center relative z-20">
      <h3>{{ pokemon.name }}</h3>
      <p>#{{ pokemon.id }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.pokemon-card {
  width: 100%;
  height: 120px;
  min-height: 100px;
  max-height: 160px;
  border-radius: 16px;
  isolation: isolate;
}

.pokemon-card:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}
</style>