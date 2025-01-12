<template>
    <div>
    <NavBar/>
    </div>
    <div class="container mx-auto p-3 lg:p-20">
        <slot></slot>
        </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
   
</script>

<!-- <style  scoped>
  /* .router-link-exact-active{
    color:rgb(38, 198, 218);
} */
</style> -->