import axios from 'axios'

export const getUserDetail = ()=>{
    let token = localStorage.getItem('token')
   const headers ={
        headers:{
            "Content-Type":"application/json",
            "Token":token
        }
    }
    return (dispatch)=>{
        axios.get('/getUserDetail',headers)
        .then((response)=>{
            dispatch({
                type:'GET_USER_DETAIL',
                payload:response.data
            })
        })
        .catch((error)=>{
            if(error){
                dispatch({
                    type:'GET_USER_DETAIL_FAIL',
                    payload:error.response.data
                })
            }
        })
    }
}