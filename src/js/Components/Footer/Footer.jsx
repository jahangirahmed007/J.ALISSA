import React from 'react';

const Footer =(props)=>{
    let res=props.foot.icon.map((item,index)=>{
        return(
            <li className="list-inline-item h4" key={index}>
                <i className={item}></i>
            </li>
        )
    })

    return(
        <div className="container-fliud bg-white ">
            <div className="container mt-3 text-dark">
                <ul className="list-inline text-center">
                    {res}
                </ul>
                <p className="text-center font">{props.foot.text}</p>
            </div>
           
        </div>
    )

}
export default Footer;
