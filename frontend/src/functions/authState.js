export const unsuscribe = auth.onAuthStateChanged(async (user)=>{
    console.log(user)
    if(user){
    const idTokenResult = await user.getIdTokenResult()
        currentUser(idTokenResult.token).then((res)=>{
            console.log('FROM THE APP JS SPECTRUM',res)
            dispatch({
                type:"LOGGED_IN_USER", payload:{email:user.email, token:idTokenResult.token, 
                    name: res.data.name,
                    picture: res.data.picture}
            })
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    
})