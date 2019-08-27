import React from 'react';
const Books =(props)=>{
    let res=props.data.books.map((item,index)=>{
        return(
            <div key={index}>
                <div className="col-md-6 bg mb-5">
                    
                    <h1 className="ml-5 h2 display-4 mt-5 mb-5 ">{item.heading}</h1>
                    <p className="ml-5 size mb-5">{item.text}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="ml-5 display-3">{item.price} <sup>$</sup> </h1>

                        </div>
                        <div className="col-md-6 ">
                            <button className="ml-5 mt-5 mb-5 btn-own2">{item.btn}</button>

                        </div>
                    </div>

                </div>
                <div className="col-md-6 bg mb-5">

                    <img src={item.img} className="img-fluid" alt=""/>
                    <div className="container mb-2 ">

                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="container-fluid ">
            <div className="container">
            <div className="row mt-5">
                {res}
            </div>
            </div>
        </div>
    )
}
export default Books;