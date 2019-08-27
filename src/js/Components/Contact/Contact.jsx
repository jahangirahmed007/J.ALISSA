import React from 'react';

const Contact =(props)=>{
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-6 ">
                        <img src={props.data.contact.img} className="img-fluid" alt=""/>

                    </div>
                    <div className="col-md-6 bg">
                        <div className="container mt-3 mb-5"></div>
                        <h1 className="ml-5">{props.data.contact.heading}</h1>
                        <p  className="ml-5">{props.data.contact.text}</p>
                        <p  className="ml-5">{props.data.contact.t2}</p>

                        <form  className="w-75 ml-5">
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-control"/>
                            </div>
                            <div className="form-group">
                               <textarea className="form-control" placeholder="Message" id="" cols="30" rows="5"></textarea>
                            </div>
                            <button className="btn ml-auto d-block btn-own3">{props.data.contact.btn1 }</button>
                        </form>
                        <p  className="ml-5 mt-4">{props.data.contact.t3}</p>
                        <form  className="form-inline ml-5 mt-3" >

                            <div className="form-group">
                                <input type="email" className="form-control w-100  mr-4" placeholder="enter your email here" />
                            </div>
                            <button className="btn  btn-own3">{props.data.contact.bnt2 }</button>
                        </form>



                    </div>
                </div>
            </div>

        </div>
    )

}
export default Contact;