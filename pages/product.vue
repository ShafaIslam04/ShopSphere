<template>
    <div>
       <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div v-for="item in products">
            <!-- <NuxtLink :to="`products/${item.id}`">{{ item.title }}</NuxtLink> -->
             <ProductCard :item="item"/>
            
        </div>
       </div>
       <h1>product page</h1>
    </div>
</template>

<script setup>
const {data:products} = await useFetch('https://fakestoreapi.com/products')


</script>

