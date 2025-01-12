<template>
     <div class="w-2/4">
    <div v-if="cart.length > 0" class="grid grid-cols-1 gap-2">
      <div v-for="cartItem in cart" :key="cartItem.id" class="cart flex items-center gap-4 p-4 border rounded">
        <img :src="cartItem.image" alt="item-thumb" class="thumb fluid" />
        <h1 class="font-serif">{{ cartItem.title }}</h1>
        <button @click="removeFromCart(cartItem.id)" class="ml-auto text-red-500  px-3 py-1 rounded">
          Remove
        </button>
      </div>
    </div>
    
    <div v-else>
      <p>Your Cart Is Empty</p>
    </div>
    
</div>
</template>

<script setup>
import { useCart } from '@/composables/useCart';
const {cart,removeItem}=useCart();
const removeFromCart=(itemId)=>{
    removeItem(itemId)
}



</script>

<style  scoped>
.thumb{
    max-height : 120px;
    max-width : 100%;
    margin : 0 auto;
    
}

</style>



  