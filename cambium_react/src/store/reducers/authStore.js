let initState = {
    token:localStorage.getItem('token'),
    msg:''
}

const authStore = (state=initState,action)=>{
    switch(action.type){
        case 'GET':{
            return state
        }
        case 'LOGIN':{
            let {user,token,msg} = action.payload;
            if(msg){
                return {...state,msg}
            }
            localStorage.setItem('token',token)
            return {...state,user,token}
        }
        case 'SIGN_UP':{
            console.log(action.payload)
            let {user,token,msg} = action.payload;
            if(msg){
                return {...state,msg}
            }
            localStorage.setItem('token',token)
            return {...state,user,token}
        }
        case 'LOGIN_FAIL':{
            console.log(action.payload)
            let {msg} = action.payload
            return {...state,msg}
        }
        case 'LOGOUT':{
            localStorage.removeItem('token')
            return {...initState,token:''}
        }
        case 'CLEAR_ERRORS':{
            return {...initState,msg:''}
        }
        default:{
            return state
        }
    }
}

export default authStore