<template>
  <div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  font-family: "Prompt", sans-serif;
}

.slide-enter {
  opacity: 0;
}

.slide-leave {
}

.slide-enter-active {
  animation: slide-in 1.25s ease-out forwards;
  transition: opacity 0.75s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
