import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from './action_type';
import axios from 'axios';

export const addFavorites = (ch) =>{
    return async (dispatch)=> {
        const response = await axios.post(`http://localhost:3001/rickandmorty/fav`, ch)
        const data = response.data;
        
            return dispatch({
                type:ADD_FAVORITES,
                payload: data,
            });
        }
    };


export const deleteFavorites = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            return dispatch({
                type:DELETE_FAVORITES,
                payload: id,
            });
        };
    };


export const filterCards = (status)=> {
    return {
        type: FILTER,
        payload: status}
}

export const orderCards = (id)=>{
    return {
        type: ORDER,
        payload: id,
    }
}

export const reset = ()=>{
    return {
        type: RESET,
    }
}