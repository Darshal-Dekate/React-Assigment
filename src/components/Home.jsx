import axios from "axios"
import { useEffect, useState } from "react"

import './Home.css'
import React from 'react';

import MyModal from './Modal.jsx'
import './Modal.css'

export default function Home(){
   
    const[product, setProduct] = useState([])
    const[showModal, setShowModal] = useState(false)
    const[re,setre] = useState()
    const closeModal = () => setShowModal(false)

   
    function LoadProduct(url){
        axios.get(url)
        .then(response=>{
            const uppercase = (response.data).map( a => a.charAt(0).toUpperCase() + a.substr(1) );
            setProduct(uppercase)
        })
    }
   
    useEffect(()=>{
        LoadProduct("https://api.chucknorris.io/jokes/categories");
    },[])
    return(
        <div id="body">
            <div className="d-flex justify-content-center mt-2">
                <h1 id="top-heading">Chuck Norries
                    {/* <span>C</span>
                    <span>h</span>
                    <span>u</span>
                    <span>c</span>
                    <span>k</span>
                    <span>&nbsp;</span>
                    <span>N</span>  
                    <span>o</span>
                    <span>r</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span> */}
                </h1>
            </div>
            <section>
                <main className="d-flex flex-wrap" >
                {
                    product.map((item,index)=>
                        <div onClick={()=>setShowModal(true,index)}key={item} data-bs-target="#register" data-bs-toggle='modal' className="card p-2 m-2 rounded-3" style={{width:'250px',height:'160px'}}>
                            <div className="middle">
                                <h2>{item}</h2>
                                <p>Unlimited Jokes on {item}</p>
                            </div>

                        </div>
                        )
                }
                </main>
                {showModal && <MyModal closeModal={closeModal}/>}
   
              
              
            </section>
        </div>
    )
}