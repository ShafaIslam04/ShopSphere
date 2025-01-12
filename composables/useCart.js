import {ref , onMounted} from 'vue'
const cart = ref([]);
export const useCart = () =>{
    

    onMounted(()=>{
        const storedCart = localStorage.getItem('cart');
        cart.value = storedCart? JSON.parse(storedCart) : []
    })

    const addItemToCart = (item)=>{
        
        cart.value.push(item);
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }

    const removeItem =(itemId)=>{
        cart.value = cart.value.filter((cartItem)=>cartItem.id!==itemId)
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }

    return {
        cart,
        addItemToCart,
        removeItem
    }

}