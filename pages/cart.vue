<template>
     <div class="w-2/4">
    <div v-if="cart.length > 0" class="grid grid-cols-1 gap-2">
      <div v-for="cartItem in cart" :key="cartItem.id" class="cart flex items-center gap-4 p-4 border rounded">
        <img :src="cartItem.image" alt="item-thumb" class="thumb fluid" />
        <h1 class="font-serif">{{ cartItem.title }}</h1>
        <button class="w-11 rounded-md bg-slate-400 font-bold" @click="addToCart(cartItem)">+1</button>
        <!-- <p>{{cartItem.quantity}}</p> -->
        <div class="relative flex ">
          <Icon name="material-symbols:add-shopping-cart-sharp" />
          <sup class="font-bold">{{ cartItem.quantity }}</sup>
        </div>
        <button class="w-11 rounded-md bg-slate-400 font-bold" @click="removeFromCart(cartItem.id)" >-1</button>
        <!-- <p>{{ cartItem.quantity }}</p> -->
        <button  @click="remove(cartItem.id)" class="text-red-500" >
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
const {cart,removeItem,addItemToCart, removeItemCart}=useCart();
const removeFromCart=(itemId)=>{
    removeItem(itemId)
}
const remove=(itemId)=>{
  removeItemCart(itemId)
}

const addToCart = (item)=>{
  addItemToCart(item)
}



</script>

<style  scoped>
.thumb{
    max-height : 120px;
    max-width : 100%;
    margin : 0 auto;
    
}

</style>



  