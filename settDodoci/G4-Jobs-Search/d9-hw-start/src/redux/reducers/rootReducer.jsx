import { combineReducers } from 'redux'
import favoritesReducer from './utenteReducer'
const rootReducer = combineReducers({
    favorites: favoritesReducer,
})


export default rootReducer;