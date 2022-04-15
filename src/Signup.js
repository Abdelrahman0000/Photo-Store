import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup({user}) {

    const [password,Setpassword]=useState('');
    const [email,setEmail]=useState('')
    
const hestory=useNavigate();

function handle(e){
  e.preventDefault() 
  
  hestory('/')
}
function handlerevent(e){
  e.preventDefault() 
  
  hestory('/login')
}
    const handlersum=()=>{
    if(password.length >6 && email.length>5){
    
    user(email)
    }
    
    }
    
      return (
        <div className="wrapper log fadeInDown">
        <div id="formContent">
        
          <div className="fadeIn first">
            <h2>please log in</h2>
          </div>
      
          
          <form onSubmit={()=>handlersum()}>
          <input type="text" id="email"  className="fadeIn second" name="login" placeholder="name" />

            <input type="text" id="login" value={email} onChange={(e)=>setEmail(e.target.value)} className="fadeIn second" name="login" placeholder="login" />
            <input type="text" id="password" className="fadeIn third" value={password} onChange={(e)=>Setpassword(e.target.value)} name="login" placeholder="password" />
            <input type="submit" className="fadeIn fourth" value="Sign up" />
          </form>
      
          
          <div id="formFooter">
            <a className="underlineHover" onClick={(e)=>handlerevent(e)}>Already have acount?</a>
          </div>
      
        </div>
      </div>
      )
}
