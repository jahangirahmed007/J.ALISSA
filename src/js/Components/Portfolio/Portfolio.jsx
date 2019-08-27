import React from 'react';
import Data from '../Data';
const Portfolio =(props)=>{
    console.log("portfolio", props.data)
    return(
        <div className="container-fluid">
            <div className="container">
               
                <div class="row">
                    <div className="col-md-4">
                        <div className="container mb-5 back1">
                            <h1 className="text-center h3 mt-5 text-white mb-5">{props.data.port.d.heading}</h1>
                            <button className="btn-own pl-3 pr-4 p-1 mx-auto d-block">{props.data.port.d.btn}</button>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="container back2">
                            <h1 className="text-center h3 mt-5 text-white mb-5">{props.data.port.s.heading}</h1>
                            <button className="btn-own pl-3 pr-4 p-1 mx-auto d-block">{props.data.port.s.btn}</button>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>

                            
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="container back3">
                            <h1 className="text-center h3 mt-5 text-white mb-5" >{props.data.port.t.heading}</h1>
                            <button className="btn-own pl-3 pr-4 p-1 mx-auto d-block">{props.data.port.t.btn}</button>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            <div className="container mt-5 mb-5 p5"></div>
                            
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Portfolio;