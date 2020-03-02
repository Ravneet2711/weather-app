import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Weather= props => (
    <div className="weather-info ">        
        <div className="container-fluid">
            <div className="row">
                <div className="col col-sm lead">
                    {props.items.date.split(" ")[0].split('-').reverse().join('-')}, 
                    {props.items.date.split(" ")[1]}
                </div>
                <div className="col col-sm">
                    {props.items.humidity}% 
                    <FontAwesomeIcon icon={faCloudRain} />
                </div>
                <div className="col col-sm">
                    {props.items.max_Temperature} 
                    <FontAwesomeIcon icon={faTemperatureHigh} /> C 
                </div>    
                <div className="w-100"></div>

                <div className="col col-sm">
                    {props.items.description}
                </div>
                <div className="col col-sm"></div>  
                <div className="col col-sm">
                    {props.items.min_Temperature}  
                    <FontAwesomeIcon icon={faTemperatureLow} /> C 
                </div>
            </div>
        </div>        
    </div>
);

export default Weather;