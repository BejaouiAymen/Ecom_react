import React , {useEffect,useState} from 'react'
import Axios from 'axios'

 
export const inscription = async (user) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",user)
  const result = await Axios.post(
    "http://localhost:4000/auth/signup",
    user
  )
  return result.data
}

export const login = async (user) => {
  const result = await Axios.post(
    "http://localhost:4000/auth/signin",
    user
  )
  console.log("ww",result.data.token)
  localStorage.setItem("mytime", result.data);
  return result.data.token
}
let badpassword = false 
/*
function AuthService(email , password) {

          axios.post('https://evaxtest.herokuapp.com/user/login',{ email :email,password:password }).then(res=>{    
            console.log("++++",res.data)   
            localStorage.setItem('token', res.data); // write
            //this.props.history.push('/');

        }
        ).catch(
          badpassword=true,
            err=>{
              console.log("---",err)
            return (err)
        }
        )
    
}
export default AuthService*/
export {badpassword}
