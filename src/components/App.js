import {useState} from 'react'
import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import MyQualities from './MyQualities/MyQualities';
import ContactMe from './ContactMe/ContactMe';
import '../App.css';

function App() {
  const [qualitiesVisible, setqualitiesVisible] = useState(false)
  const [contactFormVisibile, setContactFormVisible] = useState(false)

  return (
    <div className="App">
      <Navbar 
        showQualities={()=> setqualitiesVisible(!qualitiesVisible)}
        showContactForm={()=> setContactFormVisible(!qualitiesVisible)}
      />
      <Header/>
      <MyQualities 
        hideQualities={()=> setqualitiesVisible(!qualitiesVisible)}
        isVisible={qualitiesVisible}  
      />
      <ContactMe
        hideContactForm={()=> setContactFormVisible(!contactFormVisibile)}
        isVisible={contactFormVisibile}
      />
    </div>
  );
}

export default App;  
