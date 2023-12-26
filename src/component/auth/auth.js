import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    log: "",
    psw: "",
    subcType: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    gender: "",
    creditCard: "",
}


const auth = createSlice({
    name: 'authLog',
    initialState: initialState,
    reducers:{
        authorize:(state = initialState, action) =>{
            return{
                ...state,
                log: action.payload.log,
                psw: action.payload.psw
            }
        },
        chooseType:(state, action) =>{
            return{
                ...state,
                subcType: action.payload,
            }
        },
        formApiliation:(state, action) =>{
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthDate: action.payload.birthDate,
                email: action.payload.email,
                gender: action.payload.gender
            };
        },
        addCreditCard:(state, action) =>{
            return{
                ...state,
                creditCard: action.payload
            };
        },
    }
})

export const {authorize, chooseType,formApiliation, addCreditCard} = auth.actions;
export default auth.reducer;