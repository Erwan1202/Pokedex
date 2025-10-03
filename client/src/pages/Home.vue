<template>
  <!-- HERO -->
  <section class="relative isolate overflow-hidden h-[calc(100vh-80px)] bg-[linear-gradient(0deg,#F2B807_50%,#F5DB13_100%)]">
    <!-- léger dégradé/halo comme sur la maquette -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_60%,rgba(0,0,0,0.15),transparent_60%)]"></div>
    <!-- CONTENU -->
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full">
      <div class="grid grid-cols-12 gap-8 items-center h-full py-8">
        <!-- TEXTE -->
        <div class="col-span-12 lg:col-span-5">
          <h1 class="text-black leading-[1.05] tracking-wide">
            <span class="block text-[40px] sm:text-[48px] lg:text-[52px] font-semibold">Find</span>
            <span class="block mt-1 text-[28px] sm:text-[32px] lg:text-[36px] font-medium">all your</span>
            <span class="block mt-1 text-[28px] sm:text-[32px] lg:text-[36px] font-medium">favorite</span>
            <span class="block mt-2 text-[40px] sm:text-[48px] lg:text-[52px] font-semibold">Pokemon</span>
          </h1>

          <p class="mt-4 max-w-md text-[16px] leading-relaxed text-black/90">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>

          <RouterLink
            to="/pokedex"
            class="group relative mt-6 inline-block"
          >
            <!-- socle sombre (effet bouton 3D) -->
            <span class="absolute inset-x-0 -bottom-2 h-2 rounded-lg bg-black/25"></span>
            <span
              class="relative inline-block rounded-lg bg-emerald-400 px-7 py-3 text-white text-[17px] font-semibold shadow-lg transition-all duration-200 group-hover:translate-y-[-1px] group-active:translate-y-[1px]"
            >
              See pokemons
            </span>
          </RouterLink>
        </div>

        <!-- ILLUSTRATION -->
        <div class="col-span-12 lg:col-span-7 relative h-[400px] lg:h-[450px]">
          <!-- Nuages en arrière-plan -->
          <img src="../assets/Home_page_assets/clouds.png" alt="clouds" class="absolute top-0 left-1/2 w-[120%] max-w-none -translate-x-1/2 z-10" />
          
          <!-- Pokeball au second plan -->
          <img src="../assets/Home_page_assets/Pokeball1.png" alt="pokeball" class="absolute top-0 left-0 w-16 sm:w-32 lg:w-40 z-20 " />

          <!-- Personnage -->
          <img src="../assets/Home_page_assets/pikachu-hero.png" alt="character" class="absolute bottom-0 left-1/2 w-[90%] max-w-none -translate-x-1/2 z-30" />

          <!-- Pokeball au premier plan -->
          <img src="../assets/Home_page_assets/Pokeball2.png" alt="pokeball" class="absolute bottom-[55%] right-[-120px] w-24 sm:w-32 lg:w-36 z-30 " />
        </div>
    </div>
  </div>
  </section>
</template>


