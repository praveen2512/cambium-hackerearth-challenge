export const clearError = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'CLEAR_ERRORS'
        })
    }
}