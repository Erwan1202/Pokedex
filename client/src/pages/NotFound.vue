<template>
  <section class="grid place-items-center h-screen bg-[#D93E30] relative overflow-hidden">
    <!-- Image de fond 404 -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img 
        src="../assets/NotFound_page_assets/404.png" 
        alt="404" 
        class="w-auto h-96 opacity-20"
      >
    </div>
    
    <!-- Contenu principal -->
    <div class="relative z-10 text-center text-white">
      <!-- Image Team Rocket -->
      <div class="mb-8">
        <img 
          src="../assets/NotFound_page_assets/team_rocket.png" 
          alt="Team Rocket" 
          class="w-80 h-auto mx-auto"
        >
      </div>
      
      <!-- Texte -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-4" style="font-family: 'Karla', sans-serif;">
          The rocket team has won this time.
        </h1>
      </div>
      
      <!-- Bouton Return -->
      <RouterLink 
        to="/" 
        class="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg transition-colors duration-200"
        style="font-family: 'Karla', sans-serif;"
      >
        Return
      </RouterLink>
    </div>
  </section>
</template>
