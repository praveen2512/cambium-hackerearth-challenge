const axios = require('axios')

export const authenticate = (formData)=>{
   let headers = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    return (dispatch)=>{
        axios.post('/authenticate',formData,headers).then((response)=>{
            dispatch({
                type:'LOGIN',
                payload:response.data
            })
        }).catch((error)=>{
            if(error){
                dispatch({
                    type:'LOGIN_FAIL',
                    payload: error.response.data
                })
            }
        })
    }
}