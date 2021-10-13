import React, { Component,useEffect,useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";

const Mypost = ({accessToken}) => {

    const [post, setMypost] = useState([])
    useEffect(()=>{
        axios.get(`${ec2_url}/mypages/myPost`,{
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

    <h4 style={{padding:'20px 10px 10px 0'}}>My Post</h4>
    <span style={{margin:'20px'}}>  You have no post yet!</span>
    <button  style={{margin:'10px 0 0 10px', backgroundColor:'gray' , padding:'5px',borderRadius:'5%'}} >Create new</button>
         {/* <div>{post.map(el =><div key={el.postId} ><img src = {el.image}/></div>)}</div> */}
        </React.Fragment>
    )
}
 
export default Mypost;