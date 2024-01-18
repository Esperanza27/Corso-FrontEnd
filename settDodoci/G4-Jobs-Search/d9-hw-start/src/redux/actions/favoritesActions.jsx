export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const setAddFavorite = (newAddToFavorite) => {
    return {
        type: ADD_FAVORITE,
        payload: newAddToFavorite
    }
}

export const setRemoveFavorite = (newRemoveFromFavorite) => {
    return {
        type: REMOVE_FAVORITE,
        payload: newRemoveFromFavorite
    }
}