import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from './action_type';

export function addFavorites(ch){
    return {
        type:ADD_FAVORITES,
        payload: ch,
    };
}

export function deleteFavorites(id){
    return {
        type:DELETE_FAVORITES,
        payload: id,
    };
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status}
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id,
    }
}

export function reset(){
    return {
        type: RESET,
    }
}