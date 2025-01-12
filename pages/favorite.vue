<template>
    <div >
        <div >
       <h1>This is favorite page </h1>
       <div class=" grid grid-cols-4 gap-4" v-if="favorite.length">
        <div class="cart" v-for="item in favorite" :key="item.id">
            <img :src="item.image" alt="item-thumb" class="thumb">
            <div class="p-5 flex justify-between">
            <button class="bg-sky-100 text-sky-800 px-3 py-1 rounded-md">30% off</button>
            <!-- <Icon @click="toggleFavorite(item)" size="25" color="red" name="hugeicons:favourite"></Icon> -->
        </div>
        <h3 class="font-bold font-serif text-center truncate">{{ item.title }}</h3>
        <div class="flex justify-between text-slate-400 font-serif my-3">
            <p>Fast Delivary</p>
        <p>Best Price</p>
        </div>

        </div>

       </div>
       <div v-else><h1>There is no Favorite Item</h1></div>
    </div>
    </div>
</template>

<script setup>
import {useFavorite} from '@/composables/useFavorite';
const {favorite} = useFavorite();


</script>

<style  scoped>
.thumb{
    max-height : 200px;
    max-width : 100%;
    margin : 0 auto;
    object-fit: contain;
}

</style>