<template>
  <div class="min-h-screen">
    <header class="px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="font-bold text-xl">Pokédex</RouterLink>
      <nav class="flex gap-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/pokedex" class="hover:underline">Pokedex</RouterLink>
      </nav>
    </header>
    <main class="px-6"><RouterView /></main>
  </div>
</template>
