import {ActionType,AlertAction} from '../types';

export const setAlert =(message:string):AlertAction =>{
    return{
        type:ActionType.SET_ALERT,
        payload:message
    }
}