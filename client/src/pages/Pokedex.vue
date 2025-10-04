<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section class="space-y-4 sm:space-y-6 my-4 sm:my-6">
      <header class="space-y-2" style="margin-top: min(4.69vh, 48px);">
        <h2 class="font-normal text-center text-black" 
            style="font-family: 'Karla', sans-serif; 
                   font-size: min(2.78vw, 40px); 
                   line-height: 1.2; 
                   margin-bottom: min(2.34vh, 24px);">
          800 <span class="font-black">Pokemons</span> for you to choose your favorite
        </h2>

        <SearchBar
          @update:q="q = $event"
          @update:filters="filters = $event"
        />
      </header>

      <div v-if="loading" class="text-center py-8 text-gray-500">Loading…</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        <PokeCard v-for="p in pokemons" :key="p.id" :pokemon="p" @open="openModal" />
      </div>

      <PokeModal :open="!!selected" :p="selected" @close="selected=null"/>
    </section>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios'
import SearchBar from '../components/SearchBar.vue'
import PokeCard from '../components/PokeCard.vue'
import PokeModal from '../components/PokeModal.vue'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5174'

// recherche + filtres
const q = ref('')
const filters = ref({ types: [], attack: null, xp: null })

const pokemons = ref([])
const loading = ref(false)
const selected = ref(null)

const types = ['Grass','Poison','Fire','Water','Electric','Normal','Bug','Flying','Fairy']

// Gestion de la modal de détail
function openModal(p){ selected.value = p }

watchEffect(async () => {
  loading.value = true
  const params = {}
  if (q.value) params.q = q.value

  const chosenTypes = filters.value?.types || []
  if (Array.isArray(chosenTypes) && chosenTypes.length > 0) {
    params.type = chosenTypes[0]
  }

  const { data } = await axios.get(`${API}/api/pokemon`, { params })
  pokemons.value = data
  loading.value = false
})
</script>
