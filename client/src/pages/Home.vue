<template>
  <!-- HERO -->
  <section class="relative isolate overflow-hidden h-[calc(100vh-80px)] bg-[linear-gradient(0deg,#F2B807_50%,#F5DB13_100%)]">
    <!-- léger dégradé/halo comme sur la maquette -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_60%,rgba(0,0,0,0.15),transparent_60%)]"></div>
    <!-- CONTENU -->
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full">
      <div class="grid grid-cols-12 gap-8 items-center h-full py-8">
        <!-- TEXTE -->
        <div class="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <div class="space-y-8">
            <!-- Titre principal -->
            <h1 class="text-black tracking-[4px]" style="font-family: 'Karia', sans-serif;">
              <span class="block text-[72px] leading-[72px]" style="font-weight: 700;">Find</span>
              <span class="block text-[72px] leading-[72px]" style="font-weight: 400;">all your favorite</span>
              <span class="block text-[72px] leading-[72px]" style="font-weight: 700;">Pokemon</span>
            </h1>

            <!-- Paragraphe descriptif -->
            <p class="text-[32px] leading-[36px] text-black max-w-[515px]" 
               style="font-family: 'Karia', sans-serif; font-weight: 400; letter-spacing: 0%;">
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>

            <!-- Bouton -->
            <RouterLink
              to="/pokedex"
              class="group relative inline-block w-[231px] h-[66px]"
            >
              <span
                class="flex items-center justify-center w-full h-full rounded-[11px] text-[23px] font-bold transition-all duration-200 group-hover:translate-y-[-1px] group-active:translate-y-[1px]"
                style="background-color: #73D677; color: #212121; font-family: 'Karia', sans-serif; font-weight: 700; box-shadow: inset 0 -9px 0 rgba(0, 0, 0, 0.18);"
              >
                See pokemons
              </span>
            </RouterLink>
          </div>
        </div>

        <!-- ILLUSTRATION -->
        <div class="col-span-12 lg:col-span-7 relative h-[350px] lg:h-[400px] max-w-[516px] max-h-[557px]">
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


