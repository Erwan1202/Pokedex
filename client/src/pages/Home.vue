<template>
  <section class="min-h-screen bg-yellow-400 relative overflow-hidden">
    <!-- Nuages d'arrière-plan -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <img src="../assets/clouds.png" alt="clouds" class="absolute top-20 left-10 w-32 opacity-30" />
      <img src="../assets/clouds.png" alt="clouds" class="absolute top-40 right-20 w-24 opacity-20" />
      <img src="../assets/clouds.png" alt="clouds" class="absolute bottom-32 left-1/4 w-28 opacity-25" />
      <img src="../assets/clouds.png" alt="clouds" class="absolute bottom-60 right-10 w-20 opacity-15" />
    </div>

    <!-- Contenu principal -->
    <div class="container mx-auto px-8 py-16 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <!-- Contenu texte à gauche -->
        <div class="space-y-8">
          <h1 class="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Find all your favorite 
            <span class="block">Pokemon</span>
          </h1>
          
          <p class="text-xl text-gray-800 max-w-lg leading-relaxed font-medium">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          
          <RouterLink 
            to="/pokedex"
            class="inline-block bg-green-500 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
            See pokemons
          </RouterLink>
        </div>

        <!-- Illustration à droite -->
        <div class="relative flex justify-center items-center">
          <!-- Pokéballs flottantes -->
          <div class="absolute top-0 right-10 z-20 animate-float">
            <img src="../assets/Pokeball1.png" alt="pokeball" class="w-20 h-20" />
          </div>
          
          <div class="absolute top-20 left-0 z-20 animate-float-delayed">
            <img src="../assets/Pokeball2.png" alt="pokeball" class="w-16 h-16" />
          </div>

          <div class="absolute bottom-10 right-5 z-20 animate-float-slow">
            <img src="../assets/Pokeball1.png" alt="pokeball" class="w-14 h-14" />
          </div>
          
          <!-- Pikachu principal -->
          <div class="relative z-30 transform scale-110">
            <img src="../assets/pikachu-hero.png" alt="Pikachu" class="w-full max-w-lg drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- Cercles décoratifs flottants -->
    <div class="absolute top-1/4 right-1/3 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/3 left-1/4 w-24 h-24 bg-red-300 rounded-full opacity-15 animate-pulse-delayed"></div>
    <div class="absolute top-1/2 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-25 animate-pulse-slow"></div>
  </section>
</template>

<style scoped>
/* Animations personnalisées */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-8deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes pulse-delayed {
  0%, 100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.25;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 3.5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 5s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-pulse-delayed {
  animation: pulse-delayed 3s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
