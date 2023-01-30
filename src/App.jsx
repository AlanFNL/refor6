
import { useState } from 'react';
import NavBar from '../src/NavBar/NavBar'
import Hero from '../src/Hero/Hero'
import AboutUs from '../src/About/About'
import Process from '../src/Process/Process'
import Metaverse from '../src/Metaverse/Metaverse'
import Factory from '../src/Factory/Factory'
import Partners from '../src/Partners/Partners'
import Form from '../src/Form/Form'
import Footer from '../src/Footer/Footer'
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {

 const [accounts, setAccounts] = useState([])

   


  return (
    <div className='App'>
      <BrowserRouter>

     <NavBar accounts={accounts} setAccounts={setAccounts}/>
     <Hero/>
     <AboutUs/>
     <Process/>
     <Metaverse/>
     <Factory/>
     <Partners/>
     <Form/>
     <Footer/>

     </BrowserRouter>
    </div>

    
  );
}

export default App;
