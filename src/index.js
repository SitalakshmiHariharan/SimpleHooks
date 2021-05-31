import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import HooksComponent from './Components/hookscomponent';
//import ToDoList from './Components/ToDoList';
//import Counter from './Components/counter';
import Home from './Components/Home';


ReactDOM.render(    
      <React.StrictMode>
         <Header />
         <Home/>
         <Footer />
    </React.StrictMode>,   
  document.getElementById('root')
);


