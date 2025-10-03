<template>
  <section
    class="relative grid place-items-center min-h-screen overflow-hidden bg-[#D93E30]"
  >
    <!-- 404 en arrière-plan-->
    <div class="absolute inset-0 flex items-center justify-center">
      <img
        src="../assets/NotFound_page_assets/404.png"
        alt="404"
        class="pointer-events-none select-none
               w-[800px] sm:w-[900px] md:w-[1000px] lg:w-[1200px] 
               max-w-[90vw] sm:max-w-[85vw] h-auto opacity-200
               drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
      />
    </div>

    <!-- Contenu au premier plan -->
    <div class="relative z-10 text-center px-4 sm:px-6 md:px-8">
      <!-- Team Rocket-->
      <div class="mb-6 sm:mb-8 md:mb-10">
        <img
          src="../assets/NotFound_page_assets/team_rocket.png"
          alt="Team Rocket"
          class="mx-auto h-auto
                 w-[280px] sm:w-[360px] md:w-[480px] lg:w-[520px] xl:w-[600px] 
                 max-w-[75vw] sm:max-w-[70vw] md:max-w-[65vw] lg:max-w-[60vw]"
        />
      </div>

      <!-- Titre -->
      <h1
        class="font-karla leading-tight mb-6 sm:mb-8 md:mb-10
               text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
               px-2 sm:px-4"
      >
        <span class="text-white">The rocket team </span>
        <span class="text-black">has won this time.</span>
      </h1>

      <!-- Bouton retour-->
      <RouterLink to="/" class="inline-block">
        <span
          class="inline-flex items-center justify-center
                 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 
                 rounded-xl font-karla font-bold text-black
                 text-sm sm:text-base md:text-lg
                 bg-[linear-gradient(0deg,#F2B807_0%,#F5DB13_100%)]
                 shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]
                 transition-transform duration-150 hover:-translate-y-[1px] active:translate-y-[1px]"
        >
          Return
        </span>
      </RouterLink>
    </div>
  </section>
</template>
