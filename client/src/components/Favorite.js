import React, { Component, useState ,useEffect} from 'react';
import axios from 'axios'





const Favorite =   ({accessToken}) => {
    const [favorites, setFavorites] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/mypages/myFavorite',{
         headers: { authorization: `Bearer ${accessToken}` }
             }, {
             withCredentials: true
         }).then(data => {
             setFavorites(data.data)
         })
    },[])

   console.log(favorites)
   

    
    
    return (
        <React.Fragment>

         <h4>Favorites</h4>
         <div >{favorites.map(el =><div key={el.id} ><img src = {el.image}/></div>)}</div>
    
        </React.Fragment>
    )
}
 
export default Favorite;

