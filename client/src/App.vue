<template>
  <div class="min-h-screen">
    <header class="px-6 py-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
      <RouterLink to="/" class="font-extrabold text-2xl text-brand-yellow">Pokédex</RouterLink>
      <nav class="flex gap-6 text-gray-700 font-semibold">
        <RouterLink to="/" class="hover:text-brand-yellow transition">Home</RouterLink>
        <RouterLink to="/pokedex" class="hover:text-brand-yellow transition">Pokédex</RouterLink>
      </nav>
    </header>
    <main class="px-6"><RouterView /></main>
  </div>
</template>
