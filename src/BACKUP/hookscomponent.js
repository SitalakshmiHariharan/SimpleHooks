import React, {useState, useEffect} from 'react';
import DisplayComponent from '../Components/displayComponent';

const url = "http://localhost:6700/food";

function HooksComponent () {

    const[welcome] = useState('Hello Adithya');
    const[salutation] = useState('The future surgeon');
    const[click,setClick]= useState(0);
    const [food,setFood] = useState(0);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((res) => {
            setFood(res)
        })
    },[food])    

    return(
        <div className="jumbotron">
            <h1>{welcome}</h1>
            <h3>{salutation}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> 
                <button onClick={()=>{setClick(click + 1)}}>Just Click, I dare you</button>
                <h2>I got you :{click}</h2>    
                <DisplayComponent foods={food}/>
        </div>
    )

}

export default HooksComponent;