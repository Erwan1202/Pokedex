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
        background: pokemon.gradient 
          ? `linear-gradient(to top, ${pokemon.gradient[0]} 0%, ${pokemon.gradient[1]} 100%)`
          : pokemon.color || '#D9D9D9'
      }"
    >
      <div class="pokemon-image absolute inset-0">
        <img :src="pokemon.sprite" :alt="pokemon.name" class="w-full h-full object-contain" />
      </div>
    </section>
    
    <div class="shadow-layer absolute inset-0 rounded-[inherit] shadow-lg"></div>
    
    <div class="content-container absolute z-30" :style="{
      top: '4.4%',
      left: '7.4%',
      width: '42.5%',
      height: '23.3%'
    }">
      <h3 class="pokemon-name" :style="{
        width: '100%',
        height: '100%',
        left: '0',  
        margin: '0',
        padding: '0',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'black',
        lineHeight: '1.2',
        textAlign: 'left',
        opacity: 1
      }">{{ pokemon.name }}</h3>
    </div>
    
    <!-- Stats Attack/Defense -->
    <div class="stats-container absolute z-30" :style="{
      top: '28%',
      left: '3%',
      display: 'flex',
      gap: '18px'
    }">
      <!-- Attack -->
      <div class="stat-item" :style="{ textAlign: 'center' }">
        <div class="stat-circle" :style="{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '3px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        }">
          {{ pokemon.attack || 419 }}
        </div>
        <div class="stat-label" :style="{
          fontSize: '11px',
          fontWeight: '600',
          color: 'black',
          opacity: 0.9
        }">
          Attack
        </div>
      </div>
      
      <!-- Defense -->
      <div class="stat-item" :style="{ textAlign: 'center' }">
        <div class="stat-circle" :style="{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '3px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        }">
          {{ pokemon.defense || 49 }}
        </div>
        <div class="stat-label" :style="{
          fontSize: '11px',
          fontWeight: '600',
          color: 'black',
          opacity: 0.9
        }">
          Defense
        </div>
      </div>
    </div>
    
    <!-- Tags des types -->
    <div class="types-container absolute z-30" :style="{
      bottom: '10%',
      left: '3%',
      display: 'flex',
      gap: '8px'
    }">
      <span
        v-for="type in pokemon.types"
        :key="type"
        class="type-tag"
        :style="{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600',
          backgroundColor: getTypeColor(type),
          color: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          textTransform: 'capitalize'
        }"
      >
        {{ type }}
      </span>
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

// Fonction pour obtenir la couleur selon le type
const getTypeColor = (type) => {
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#5DADE2',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#00BCD4',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  }
  return typeColors[type.toLowerCase()] || '#68A090'
}
</script>

<style scoped>
.pokemon-card {
  width: 100%;
  height: 140px;
  min-height: 120px;
  max-height: 160px;
  border-radius: 16px;
  isolation: isolate;
}

.pokemon-card:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}
</style>

