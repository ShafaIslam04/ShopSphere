import {onMounted,ref} from 'vue'

const favorite = ref([]);
export const useFavorite = () =>{
   
    onMounted(()=>{
        const storedFavorite = localStorage.getItem('favorite');
        favorite.value = storedFavorite? JSON.parse(storedFavorite) : [];
    })

    const addToFavorite = (item) =>{
        if(!favorite.value.find((fav)=>fav.id === item.id)){
            favorite.value.push(item);
            localStorage.setItem('favorite', JSON.stringify(favorite.value))
        }
    }

    const removeFavorite = (itemId) =>{
        favorite.value = favorite.value.filter((fav)=>fav.id !==itemId)
        localStorage.setItem('favorite',JSON.stringify(favorite.value))

    }

    return{
        favorite,
        addToFavorite,
        removeFavorite

    }
}