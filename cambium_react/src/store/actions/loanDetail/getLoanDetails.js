import axios from 'axios'

export const getLoanDetails = ()=>{
    let token = localStorage.getItem('token')
   const headers ={
        headers:{
            "Content-Type":"application/json",
            "Token":token
        }
    }
    return (dispatch)=>{
        axios.get('/getLoans',headers)
        .then((response)=>{
            dispatch({
                type:'GET_LOAN_DETAIL',
                payload:response.data
            })
        })
    }
}