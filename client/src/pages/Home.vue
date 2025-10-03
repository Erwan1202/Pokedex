<template>
  <!-- HERO -->
  <section
    class="relative isolate overflow-hidden h-[calc(100vh-80px)]
           bg-[linear-gradient(0deg,#F2B807_50%,#F5DB13_100%)]"
    aria-label="Hero Pokémon"
  >
    <!-- halo/dégradé -->
    <div
      class="pointer-events-none absolute inset-0
             bg-[radial-gradient(1200px_600px_at_70%_60%,rgba(0,0,0,0.15),transparent_60%)]">
    </div>

    <!-- CONTENU -->
    <div class="relative z-40 h-full">
      <!-- === Bloc TEXTE (positions & tailles Figma) === -->
      <div class="absolute left-[160px] top-[166px] w-[515px]">
        <!-- Titre sur 4 lignes -->
        <h1
          class="font-karla text-black tracking-[4px] leading-[1] antialiased w-[506px]"
        >
          <span class="block text-[72px] font-bold">Find</span>
          <span class="block text-[72px] font-normal">all your</span>
          <span class="block text-[72px] font-normal">favorite</span>
          <span class="block text-[72px] font-bold">Pokemon</span>
        </h1>

        <!-- Paragraphe : 32px sous le titre -->
        <p
          class="mt-[32px] font-karla text-[32px] font-normal leading-[1] text-black w-[515px]"
        >
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </p>

        <!-- CTA : 32px sous le paragraphe -->
        <RouterLink to="/pokedex" class="inline-block mt-[32px]">
          <span
            class="inline-flex items-center justify-center
                   w-[180px] h-[48px] rounded-[10px]
                   font-karla text-[18px] font-bold
                   bg-[#73D677] text-[#212121]
                   shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]
                   transition-transform duration-200
                   hover:-translate-y-[1px] active:translate-y-[1px]"
          >
            See pokemons
          </span>
        </RouterLink>
      </div>

      <!-- ILLUSTRATION -->
      <div class="absolute right-0 top-0 w-[793px] h-[680px] max-w-full">
        <!-- Nuages -->
        <img
          src="../assets/Home_page_assets/clouds.png"
          alt="Clouds"
          class="absolute z-10
                 w-[684.82px] h-[432.64px]
                 top-[20.69px] left-[31.98px]" />

        <!-- Pokéball arrière-plan -->
        <img
          src="../assets/Home_page_assets/Pokeball1.png"
          alt="Pokeball"
          class="absolute z-20
                 w-[166.97px] h-[167.55px]
                 top-[70px] left-[69.61px]
                 -rotate-[5deg] opacity-90" />

        <!-- Pikachu -->
        <img
          src="../assets/Home_page_assets/pikachu-hero.png"
          alt="Pikachu"
          class="absolute z-30
                 w-[647.31px] h-[647.2px]
                 top-[30.1px] left-1/2 -translate-x-1/2" />

        <!-- Pokéball avant-plan -->
        <img
          src="../assets/Home_page_assets/Pokeball2.png"
          alt="Pokeball big"
          class="absolute z-30
                 w-[250px] h-[316.96px]
                 left-[600px]" />
      </div>
    </div>
  </section>
</template>
