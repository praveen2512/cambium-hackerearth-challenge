let initState ={
    userDetail : {},
    loans: JSON.parse(localStorage.getItem('loans')) || {}
}
const userStore = (state=initState,action)=>{
    switch(action.type){
        case 'GET_USER_DETAIL':{
            return {...state,userDetail:action.payload}
        }
        case 'GET_USER_DETAIL_FAIL':{
            console.log(action.payload)
            return state
        }
        case 'GET_LOAN_DETAIL':{
            let {loans} = action.payload
            return {...state,loans}
        }
        default:{
            return state
        }
    }
}

export default userStore