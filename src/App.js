import React,{  useEffect, useState } from "react";
import Login from "./Login";
import data from'./data'
import { Route,Routes,BrowserRouter as Router  } from "react-router-dom";
import * as ROUTS from "./routs";
import Auction from "./Auction";
import Navbar from "./navbar";
import Signup from "./Signup";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
import Notfound from "./notfound";
import About from "./About";
import Best from "./best";
import Profile from "./profile";



let fav =[]
function App() {
const [user,setUser]=useState();
const[photos,setPhotos]=useState(data)
const[chose,setchose]=useState()
const [addfav,setaddfav]=useState();

useEffect(()=>{
  if(addfav){
  fav.push(addfav);
  console.log(fav)
  }
},[addfav])

const removefav=(id)=>{
const newfav=fav.filter((item)=>item.id!==id)
fav=newfav;
console.log('remove',newfav)
console.log(fav.length)

}

  if(!user){
   
    return ( 
          
      <Router>
        
          <Routes>
                        <Route path={'/'} element={<Login user={setUser} /> } />
                        <Route path={ROUTS.NOT_FOUND} element={<Notfound /> } />
                        <Route path={ROUTS.Signup} element={<Signup user={setUser} /> } />
          </Routes>
      </Router>
    )
    
    }
    
   



  return (
    
 
      <>
      
        <Router>
          <Navbar />
            <Routes>
                          <Route path={ROUTS.Main} element={<Main Photos={photos} tochose={setchose} /> } />
                          <Route path={ROUTS.Auction} element={<Auction tour={chose} user={user}/> } />
                           <Route path={ROUTS.About} element={<About /> } />
                           <Route path={ROUTS.Best} element={<Best /> } />
                           <Route path={ROUTS.Profile} element={<Profile  user={user}  tochose={setchose} /> } />
                          <Route path={ROUTS.NOT_FOUND} element={<Notfound /> } />
            </Routes>
        </Router>
      
   </>
      );
    }
  
 

export default App;
