import {ThunkAction} from 'redux-thunk'
import {RootState} from '..';
import {WeatherAction,WeatherData,WeatherError,WeatherState,ActionType} from '../types'
export const getWeather = (city:string):ThunkAction<void,RootState,null,WeatherAction>=>{
    return async dispatch=>{
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9619b4a421240bd3082e70e21c9bbc1`);
            if (!res.ok){
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }
            const resData:WeatherData = await res.json();
            dispatch({
                type:ActionType.GET_WEATHER,
                payload:resData
            });
        }catch(err){
            dispatch({
                type:ActionType.SET_ERROR,
                payload:err.message
            })
        }
    }        
}
export const setLoading =():WeatherAction=>{
    return{
        type:ActionType.SET_LOADING
    }
}
export const setError = ():WeatherAction=>{
    return{
        type:ActionType.SET_ERROR,
        payload:''
    }
}