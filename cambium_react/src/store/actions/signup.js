import Axios from "axios";

export const signup = (formData)=>{
    console.log(formData)
    let headers = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    return (dispatch)=>{
        console.log(formData)
        Axios.post('/registerUser',formData,headers)
        .then((response)=>{
            dispatch({
                type:'SIGN_UP',
                payload:response.data
            })
        })
        .catch(error=>{
            if(error){
                dispatch({
                    type:'LOGIN_FAIL',
                    payload: error.response.data
                })
            }
        })
        
    }
}