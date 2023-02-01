import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from './action_type';
import axios from 'axios';

export function addFavorites(ch){
    return function (dispatch) {
        axios.post(`http://localhost:3001/rickandmorty/fav`, ch)
        .then((v)=> v.json)
        .then((d)=>{
            dispatch({
                type:ADD_FAVORITES,
                payload: d,//ahora add favorites no solo modifia
            });
        });
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