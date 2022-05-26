 
export {
    setMapVisible,
} from "./Map"; 
/* 
export default function apiGet() {
   const apiURL='http://172.30.15.5:3015/api/mapadb'
    const dispatch = useDispatch() 

    useEffect(() => {
      fetch('http://172.30.15.5:3015/api/mapadb')
      .then(response =>response.json())
    .then (tasks => dispatch({type : 'SET_TASKS',todo:tasks}))
    },[] 
} */
/* export const FETCH_API= 'FETCH_API';
const BASEURL = 'http://172.30.15.5:3015/api/mapadb';

export const apiGet = ()=> {
    const url = `${BASEURL}`;
    const request = axios.get(url);
    return {
        type: FETCH_API,
        payload: request,
        ubicaciones : url.data
    };} 

export const apiGet = ()=> {
    export const FETCH_API= 'FETCH_API';
    const BASEURL = 'http://172.30.15.5:3015/api/mapadb';

        const url = `${BASEURL}`;
        //const request = axios.get(url);
        const request ={
                method:'GET',
              //  headers: {"Content-type":"application/json; charset=UTF-8"}
        }
        return fetch (url , request ).then (response => response.json());
            type: FETCH_API,
            payload: request,
            ubicaciones : url.data 
        ;
    }*/

/* export const SHOW_USERS = 'SHOW_USERS'
export function showUsers() {
    
    return (dispatch, getState) => {
        axios.get('http://172.30.15.5:3015/api/mapadb')
       // axios.get('http://172.30.15.5:3015/api/distanciadb')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data } ) 
            }) 
    }
    
}  */