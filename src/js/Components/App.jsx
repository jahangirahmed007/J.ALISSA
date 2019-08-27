import React,{Component} from 'react';
import Data from './Data';
import Home from './Home/Home';
import { Route, Switch  } from  'react-router-dom'
import Portfolio from '../Components/Portfolio/Portfolio';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Books from '../Components/Books/Books';
import Contact from '../Components/Contact/Contact';
class App extends Component {

    state={
        data:Data,

    }

    render(){
        
        return(

            <div>
                <Nav nav={this.state.data.nav[0]} />
            <Switch>
              <Route path='/' exact render={props => (<Home {...props} data={this.state.data}/>)}/> 
             <Route path='/portfolio' render={props => (<Portfolio {...props} data={this.state.data}/>)} />
             <Route path='/about' render={props => (<About {...props} data={this.state.data}/>)} />

             <Route path='/books' render={props => (<Books {...props} data={this.state.data}/>)} />
             <Route path='/contact' render={props => (<Contact {...props} data={this.state.data}/>)} />
              </Switch> 
              

              <Footer foot={this.state.data.footer} />
        </div>

        )
       
    }
}
export default App;