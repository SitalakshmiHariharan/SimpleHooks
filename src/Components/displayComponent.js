import React from 'react';

function DisplayComponent (props) {

    const renderList = ({foods}) => {
        if(foods){
            return foods.map((item) => {
                return(
                    <div>
                        <img src={item.img} alt={item.name}></img>
                        <h3>{item.type}</h3>
                    </div>
                )
            })
        }
    }

    return(
        <div>
         {renderList(props)}
        </div>
    )

}

export default DisplayComponent;




