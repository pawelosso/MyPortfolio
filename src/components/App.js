import {useState} from 'react'
import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import MyQualities from './MyQualities/MyQualities';
import ContactMe from './ContactMe/ContactMe';
import '../App.css';
import MyProjects from './MyProjects/MyProjects';

function App() {
  
  const [qualitiesVisible, setqualitiesVisible] = useState(false)
  const [contactFormVisibile, setContactFormVisible] = useState(false)
  const [myprojectsVisible, setmyprojectsVisible] = useState(false)

  return (
    <div className="App">
      <Navbar 
        showQualities={()=> setqualitiesVisible(!qualitiesVisible)}
        showContactForm={()=> setContactFormVisible(!contactFormVisibile)}
        showMyProjects={()=> setmyprojectsVisible(!myprojectsVisible)}
      />
      <Header/>
      <MyQualities 
        hideQualities={()=> setqualitiesVisible(!qualitiesVisible)}
        isVisible={qualitiesVisible}  
      />
      <MyProjects 
        hideMyProjects={()=> setmyprojectsVisible(!myprojectsVisible)}
        isVisible={myprojectsVisible}
      />
      <ContactMe
        hideContactForm={()=> setContactFormVisible(!contactFormVisibile)}
        isVisible={contactFormVisibile}
      />
    </div>
  );
}

export default App;  
