import React from 'react';

const About =(props)=>{
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={props.data.about.img} className="img=fluid" alt=""/>

                    </div>
                    <div className="col-md-6 gray "
                    >
                        <div className="container mb-5 mt-5 p-5">

                        </div>
                        <h1 className="mt-5  mb-3 ml-5 grey"> {props.data.about.heading}</h1>
                        <p className="ml-5 size grey">{props.data.about.t1}</p>
                        <p  className="ml-5 size grey mb-5">{props.data.about.t2}</p>
                        <h4 className="grey ml-5 mt-5 mb-3">{props.data.about.ed}</h4>
                        <p  className="ml-5 size grey mb-5">{props.data.about.t3}</p>

                        <h4 className="ml-5 grey mb-3">{props.data.about.aw}</h4>
                        <p  className="ml-5 size grey">{props.data.about.t4}</p>


                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;