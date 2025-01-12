<template>
    <div>
       
       <div class="flex justify-between p-20">
        <img class="w-80 " :src="product.image" alt="" srcset="">
        <div>
   <div class="p-20">
      <h1 class="text-4xl font-serif">{{ product.title }}</h1>
   <p class="text-3xl font-serif my-5">Price: ${{ product.price }}</p>
  <div class="flex ">
   <button @click="addFavorite(product)"  class="w-36 h-10 rounded-md border-2 border-zinc-400 text-zinc-400 hover:bg-slate-400 hover:text-black "><span class="p-2"><Icon name="hugeicons:favourite"/></span>Add Favorite</button>
   <button class="mx-5 w-36 h-10 rounded-md border-2 border-zinc-400 text-zinc-400 hover:bg-slate-400 hover:text-black " @click="addToCart(product)"><span class="p-2"><Icon name="mdi:cart-outline"/></span>Add to Cart</button>
   <hr />
   
  </div>
  <h3 class="text-gray-400 mt-10 font-serif " >{{ product.description }}</h3>
        </div>
   </div>
       </div>
  

    </div>
</template>

<script setup>
import {useCart} from '@/composables/useCart';
import {useFavorite} from '@/composables/useFavorite'
const {addItemToCart} = useCart()
const {addToFavorite} = useFavorite()
const {id} = useRoute().params
const url = 'https://fakestoreapi.com/products/' + id
const { data : product} =await useFetch(url, {key : id})
 const addToCart = (item)=>{
    addItemToCart(item)
 }

 const addFavorite = (item)=>{
   addToFavorite(item)
 }

</script>

<!-- <style lang="scss" scoped>

</style> -->