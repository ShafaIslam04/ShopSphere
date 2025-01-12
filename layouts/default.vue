<template>
    <div>
        <header class="shadow bg-white fixed mt-0 ml-0 w-full z-index" >
        <nav class="container lg:font-serif mx-auto p-4 grid grid-cols-4  md:flex md:justify-between lg:flex lg:justify-between" >
            <NuxtLink to="/"><span class="text-cyan-400 font-bold  lg:text-[25px]">Shop<span class="text-red-400">Sphere</span></span></NuxtLink>
            <ul class="flex gap-4 font-bold lg:text-xl ml-4">
                <li ><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/product">Product</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li><NuxtLink to="/Favorite">Favorite</NuxtLink></li>
            </ul>
        </nav>
    </header>
    </div>
    <div class="container mx-auto p-3 lg:p-20">
        <slot></slot>
        </div>
</template>

<script setup>
   
</script>

<style  scoped>
  .router-link-exact-active{
    color:rgb(38, 198, 218);
}
</style>