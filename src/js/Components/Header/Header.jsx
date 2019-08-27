import React from 'react';


const Header=(props)=>{

  
    return(
       
           <div className="container-fluid">
               <div className="container back mt-5  p-5" >
               <div className="container mt-5 mb-5 p-5" ></div>
               <div className="container mt-5 mb-5 p-5" ></div>
               <div className="container mt-5 mb-5 p-5" >
               <h1 className="text-center text-own display-2">{props.head.heading}</h1>
                   <h4 className="text-center text-own">{props.head.sub}</h4>
                   <button className="btn-own  p-2 pl-5 pr-5 mx-auto d-block mt-5 mb-5">{props.head.btn}</button>
               </div>
               <div className="container mt-5 mb-5 p-5" ></div>
               
               
               
               </div>
              

       </div>
    )

}
export default Header;