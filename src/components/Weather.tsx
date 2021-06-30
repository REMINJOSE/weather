import React, {FC} from 'react'
import {WeatherData} from '../store/types'
import './Weather.css'

interface WeatherProps{
    data:WeatherData;
}
const Weather:FC<WeatherProps>=({data})=>{
    const fahrenheit = (data.main.temp*1.8-459.67).toFixed(2);
    const celsius = (data.main.temp-273.15).toFixed(2)

    return(
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered" style={{marginBottom:50}}>
                    {data.name} - {data.sys.country}
                </h1>
                <div className="result" >
                    <div className="result__item">
                        <div >
                            <p className="heading">
                                {data.weather[0].description}
                            </p>
                            <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" /></p>
                        </div>
                    </div>
                    <div className="result__item">
                        <div>
                            <p className='heading'>Temp</p>
                            <div className="title">
                                <p className="mb-2">{data.main.temp}k</p>
                                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                                <p className="mb-2">{celsius}<sup>&#8451;</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="result__item">
                        <div>
                            <p className="heading">
                                humidity
                            </p>
                            <p className="title">{data.main.humidity}</p>
                        </div>
                    </div>
                    <div className="result__item">
                        <div >
                            <p className="heading">Pressure</p>
                            <p className="title">{data.main.pressure}</p>
                        </div>
                    </div>
                    <div className="result__item">
                        <div>
                            <p className="headeing">wind</p>
                            <p className="title">{data.wind.speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Weather