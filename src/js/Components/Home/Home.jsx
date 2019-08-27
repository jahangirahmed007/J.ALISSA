import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Books from '../Books/Books';
import Contact from '../Contact/Contact';

const Home=(props)=>{
    console.log(props)
    return(
       
        <div>
       
            
            <Header head={props.data.header} />
            
            
        </div>
       
    


        
    )

}
export default Home;