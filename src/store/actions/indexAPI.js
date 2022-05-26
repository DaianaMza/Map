import axios from 'axios';

export const SHOW_USERS = 'SHOW_USERS'
export function showUsers() {
    return (dispatch, getState) => {
        axios.get('http://172.30.15.5:3015/api/mapadb')
       // axios.get('http://172.30.15.5:3015/api/distanciadb')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data } ) 
            }) 
    }  
} 

export default async function showInfo(){
    const response = await axios.get(`http://172.30.15.5:3015/api/mapadb`)
    return{
        type : actionTypes.SET_MAP_VISIBLE,
        payload: response.data
    }

}
