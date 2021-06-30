import { WeatherState,WeatherAction, ActionType } from "../types";

const initialState: WeatherState={
    data:null,
    loading:false,
    error:''
}
export default (state=initialState, action:WeatherAction):WeatherState=>{
    switch (action.type) {
        case ActionType.GET_WEATHER:
            return {
                data:action.payload,
                loading:false,
                error:''
            }
        case ActionType.SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case ActionType.SET_ERROR:
            return{
                ...state,
                error:action.payload,
                loading:false,
            }
            default:
                return state;
    }
}