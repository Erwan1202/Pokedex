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
               w-[1200px] max-w-[85vw] h-auto opacity-200
               drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
      />
    </div>

    <!-- Contenu au premier plan -->
    <div class="relative z-10 text-center px-4">
      <!-- Team Rocket-->
      <div class="mb-10">
        <img
          src="../assets/NotFound_page_assets/team_rocket.png"
          alt="Team Rocket"
          class="mx-auto h-auto
                 w-[520px] md:w-[560px] lg:w-[600px] max-w-[80vw]"
        />
      </div>

      <!-- Titre -->
      <h1
        class="font-karla leading-tight mb-10
               text-3xl md:text-4xl lg:text-5xl"
      >
        <span class="text-white">The rocket team </span>
        <span class="text-black">has won this time.</span>
      </h1>

      <!-- Bouton retour-->
      <RouterLink to="/" class="inline-block">
        <span
          class="inline-flex items-center justify-center
                 px-10 py-3 rounded-xl font-karla font-bold text-black
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
