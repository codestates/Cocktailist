import React, { Component, useState ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Favorite.css'

const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";



const Favorite =   ({accessToken}) => {
    const [favorites, setFavorites] = useState([])
    useEffect(()=>{
        axios.get(`${ec2_url}/mypages/myFavorite`,{
         headers: { authorization: `Bearer ${accessToken}` }
             }, {
             withCredentials: true
         }).then(data => {
             setFavorites(data.data)
         })
    },[])

   console.log(favorites)
   
   const handleDelete = (favorite) => {
       
       axios.get(`${ec2_url}/mypages/deleteFavorite/${favorite.id}`)
   }
   const handleCocktailPage = (cocktail) =>{
       console.log(cocktail)
   }

    
    return (
        <React.Fragment>
         <h4 style={{padding:'20px 10px 10px 0'}}>Favorites</h4>
         <div id='favorites-container' >{favorites.map(el =><div className ="favorite-item" key={el.id} ><img onClick={()=>handleCocktailPage(el)} src = {el.image}/><button onClick={()=> handleDelete(el)} >X</button></div>)}</div>
        </React.Fragment>
    )
}
 
export default Favorite;

