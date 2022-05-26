/* import * as actionTypes from "./actionTypes";
import axios from "axios";

export default function llamadoApi(){
    return async function(dispatch){
       try {
        const response = await axios.get(`http://172.30.15.5:3015/api/mapadb`)
    dispatch(
        {type : actionTypes.SET_MAP_VISIBLE,
        payload: response.data} ) 
    } catch (error) {
        console.log(error);
    }  
    }
   
   

}

 */