import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
const MyModal = ({closeModal}) => {
  const[title, setTitle] = useState([])
  function GetTitle(url){
    axios.get(url)
    .then(response=>{
        const uppercase = (response.data).map( a => a.charAt(0).toUpperCase() + a.substr(1) );
        setTitle(uppercase)
    })
}
  useEffect(()=>{
    GetTitle("https://api.chucknorris.io/jokes/categories");
},[])
  return(
      <div>      
            <div className="modal-wrapper"  onClick={closeModal}></div>
             <div className="modal-container">
             {/* {
          title.map(item=>
              <h2>{item}</h2>
          )
          } */}
          <p>This is the modal Data to show</p>
              <button className="moda-btn" onClick={closeModal}>Next Joke</button>
        </div>
      </div>
  )
}
export default MyModal