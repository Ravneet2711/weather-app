import React from 'react';
import Weather from './weather';

const ListItem = (props) => {
    let id = 1;
    const listElement = props.lists.map((list)=>{
        const item = {id:id,
            date:list.dt_txt, 
            description:list.weather[0].description, 
            humidity:list.main.humidity, 
            max_Temperature:list.main.temp_max, 
            min_Temperature:list.main.temp_min
        };
        id+=1;
        return <Weather key={item.id} items={item}/>
    });   
    return <div>{listElement}</div>
};

export default ListItem;