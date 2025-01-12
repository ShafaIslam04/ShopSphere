import {ref , onMounted} from 'vue'
const cart = ref([]);
export const useCart = () =>{
    

    onMounted(()=>{
        const storedCart = localStorage.getItem('cart');
        cart.value = storedCart? JSON.parse(storedCart) : []
    })

    const addItemToCart = (item)=>{
        const existingItem = cart.value.find((cartItem)=>cartItem.id ===item.id)
        if(existingItem ){
         existingItem.quantity +=1; 
        }else{
          cart.value.push({...item,quantity:1})

        }
        


        localStorage.setItem('cart',JSON.stringify(cart.value))
        
        // cart.value.push(item);
        // localStorage.setItem('cart',JSON.stringify(cart.value))
    }


    const removeItem = (itemId) => {
        const existingItem = cart.value.find((cartItem) => cartItem.id === itemId); 
        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1; 
            } else {
                cart.value = cart.value.filter((cartItem) => cartItem.id !== itemId); 
            }
            localStorage.setItem('cart', JSON.stringify(cart.value)); 
        }
    };
    

    const removeItemCart =(itemId)=>{
        cart.value = cart.value.filter((cartItem)=>cartItem.id!==itemId)
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }

    return {
        cart,
        addItemToCart,
        removeItem,
        removeItemCart
        
    }

}