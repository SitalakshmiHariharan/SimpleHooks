import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayComponent from './displayComponent';

const url = "http://localhost:6700/food";

export default function Home() {

    const [food,setFood] = useState(0);

    useEffect(() => {
        axios.get(url)
        .then(response => response.data)
        .then((response) => {
            setFood(response)
        })
    },[food]) 

    return (
        <div>
            <DisplayComponent foods={food}/>         
        </div>
    )
}
