import React, { Component,useEffect,useState } from 'react';
import axios from 'axios'

const Mypost = ({accessToken}) => {

    const [post, setMypost] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/mypages/myPost',{
         headers: { authorization: `Bearer ${accessToken}` }
             }, {
             withCredentials: true
         }).then(data => {
             setMypost(data.data)
         })
    },[])
    console.log(post)
    return (
        <React.Fragment>

    <h4>My Post</h4>
    
         <div>{post.map(el =><div key={el.postId} ><img src = {el.image}/></div>)}</div>
        </React.Fragment>
    )
}
 
export default Mypost;