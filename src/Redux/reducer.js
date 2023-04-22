import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET} from './action_type';

const initialState = {
    myFavorites:[],
    myFavoritesCopy: [],//hago una copia para poder filtrar sin modificar mi array estado original con los char cargados
    genderFilter: null,
    order: null,
};

export default function rootReducer(state= initialState, {type, payload}){
    switch (type) {
    case ADD_FAVORITES:
    return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        myFavoritesCopy:[...state.myFavoritesCopy, payload]
    };

    case DELETE_FAVORITES:
   const filtered = state.myFavorites.filter((ch)=>{
    return ch.id !== payload;
   })
    return {
        ...state,
        myFavorites: filtered,
        myFavoritesCopy: filtered
    };

    case FILTER:
        const filterCopy = [...state.myFavorites]
        
        console.log(filterCopy);
        const filter = payload ? filterCopy.filter((ch) => ch.gender === payload) : filterCopy;
        console.log(filter);
        return {
            ...state,
            myFavoritesCopy: filter
            
        };

// case ORDER: 
// const orderCopy= [...state.myFavoritesCopy];
// const order = orderCopy.sort((a,b)=> {
//     if(a.id> b.id){
//         return 'Ascendente'=== payload ? 1 : -1;
//     }
//     if(a.id<b.id){
//         return 'Descendente' === payload ? 1: -1;
//     }
//     return 0;
// });

// return {
//     ...state,
//     myFavorites: order,
// };

case ORDER: 
const copy = [...state.myFavoritesCopy];
if ( payload === 'Ascendente') {
  copy.sort((a, b) => a.name.localeCompare(b.name));
} else if ( payload === 'Descendente') {
  copy.sort((a, b) => b.name.localeCompare(a.name));
}
return {
  ...state,
  myFavoritesCopy: copy,
  order:  payload,
};

case RESET:
  console.log(state.myFavorites);
    return{
        ...state,
        myFavoritesCopy: [...state.myFavorites],
        myFavorites:[...state.myFavorites],
        genderFilter: null,
        order: null,

    }

    default:
        return state;
}}


