<template >
  
    <div class="cart p-10 ">
        <NuxtLink :to="`products/${item.id}`">
        <img :src="item.image" alt="item-thumb" class="thumb">
    </NuxtLink>
        <div class="p-5 flex justify-between m-4">
            <button class="bg-sky-100 text-sky-800 px-3  rounded-md font-bold">30% off</button>
            <Icon
        @click="toggleFavorite(item)"
        size="25"
        :style="{ color: isFavorite ? 'red' : 'gray', cursor: 'pointer' }"
        name="hugeicons:favourite"
      />
        </div>
        <h3 class="font-bold font-serif text-center truncate">{{ item.title }}</h3>
        <div class="flex justify-between text-slate-400 font-serif my-3">
            <p>Fast Delivary</p>
        <p>Best Price</p>
        </div>
       <!-- <div class="flex  justify-between mt-8"> -->
        <p class="font-bold font-serif text-red-500 text-center text-xl">${{ item.price }}</p>
        <div class="flex items-center justify-center">
        <button class="btn font-bold text-center mx-0 my-4 hover:bg-blue-200" @click="addToCart(item)" >Add to Cart</button>
    </div>
       <!-- </div> -->

    </div>

</template>

<script setup>
import {useCart} from '@/composables/useCart'
const {addItemToCart} = useCart()
import { useFavorite } from '@/composables/useFavorite';
const {favorite,addToFavorite,removeFavorite} = useFavorite()
const {item} = defineProps(['item'])
const addToCart = (item)=>{
    addItemToCart(item)
   
}

const isFavorite = computed(()=>{
    return favorite.value.some((fav)=>fav.id===item.id)
});

const toggleFavorite = (item) =>{
     if(isFavorite.value){
        removeFavorite(item.id) 
     }else{
        addToFavorite(item) 
     }
}


</script>

<style  scoped>
.thumb{
    max-height : 120px;
    max-width : 100%;
    margin : 0 auto;
    object-fit: contain;
}





</style>