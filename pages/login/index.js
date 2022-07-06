import React from 'react'
import {useSession,signIn,signOut} from 'next-auth/react'
function Login() {
    const {data:session}=useSession();
    console.log(session)
    if(session){
        return (
            <div>
            <div>Welcome ,{session.user.email}</div>
            <button onClick={signOut}>sign out</button>
            </div>
          )
    }
    else{
        return (
            <div>
                <p>You are not signed in</p>
                <button onClick={signIn}>Sign in</button>
            </div>
          )
    }
 
}

export default Login