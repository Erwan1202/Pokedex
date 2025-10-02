<template>
  <section class="grid md:grid-cols-2 gap-8 items-center my-10">
    <div class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-extrabold">Find all your favorite Pokémon</h1>
      <p class="text-gray-600">
        You can know the type of Pokémon, its strengths, disadvantages and abilities.
      </p>
      <RouterLink to="/pokedex"
        class="inline-block bg-brand-yellow text-black font-semibold px-5 py-3 rounded-xl shadow">
        See pokemons
      </RouterLink>
    </div>
    <!--<img src="/pikachu-hero.png" class="w-full max-w-md mx-auto" alt="Pikachu" />-->
  </section>
</template>
