<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section class="space-y-6 my-6">
      <header class="space-y-2" style="margin-top: min(4.69vh, 48px);">
        <h2 class="font-normal text-center text-black" 
            style="font-family: 'Karla', sans-serif; 
                   font-size: min(2.78vw, 40px); 
                   line-height: 1.2; 
                   margin-bottom: min(2.34vh, 24px);">
          800 <span class="font-black">Pokemons</span> for you to choose your favorite
        </h2>
        <SearchBar :types="types" @update:q="q=$event" @update:type="type=$event" />
      </header>

      <div v-if="loading">Loading…</div>
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
const q = ref('')
const type = ref('')
const pokemons = ref([])
const loading = ref(false)
const selected = ref(null)

const types = ['Grass','Poison','Fire','Water','Electric','Normal','Bug','Flying','Fairy']

function openModal(p){ selected.value = p }

watchEffect(async () => {
  loading.value = true
  const params = {}
  if (q.value) params.q = q.value
  if (type.value) params.type = type.value
  const { data } = await axios.get(`${API}/api/pokemon`, { params })
  pokemons.value = data
  loading.value = false
})
</script>
