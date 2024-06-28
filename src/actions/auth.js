import { 
    REGISTER_RESPONSE,
    VERIFY_OTP,
    GET_NAVITEMS,
    CONTACT_US,
} from "./type";

import { apiCall } from "../api";
import { baseUrl } from "../constants/const";


const base_url = "https://testing-node-vercel-livid.vercel.app"
// const base_url = "http://localhost:3010"

export const registerUser = (data) => async (dispatch) => {
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/customer/customer_register`, // Assuming baseUrl is defined somewhere
            data:data // Send the entire data object as a JSON string
        };

        console.log("config",config)

        // Make the API call
        let response = await apiCall(config, dispatch);
        console.log("response",response);


        // Dispatch the response to the reducer
        dispatch({
            type: REGISTER_RESPONSE,
            payload: response.data // Ensure you send response data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_RESPONSE,
            payload: error.response ? error.response.data : 'An error occurred'
        });
        console.error('Error registering user:', error.response);
    }
};


export const verifyOtp = (data)=>async dispatch =>{
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/customer/verifyOTp`, // Assuming baseUrl is defined somewhere
            data: data // Send the entire data object
        };
        // Make the API call
        let response = await apiCall(config, dispatch);

        // Dispatch the response to the reducer
        dispatch({
            type: VERIFY_OTP,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: VERIFY_OTP,
            payload: error.response
        })
        console.error('Error otp user:', error);
        // Handle the error
    }
}
export const getNavItems = (data)=>async dispatch =>{
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/navitem/getnavitem`, // Assuming baseUrl is defined somewhere
            data: data // Send the entire data object
        };
        // Make the API call
        let response = await apiCall(config, dispatch);

        // Dispatch the response to the reducer
        dispatch({
            type: GET_NAVITEMS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: GET_NAVITEMS,
            payload: error.response
        })
        console.error('Error otp user:', error);
        // Handle the error
    }
}


export const contactUs = (data)=>async dispatch =>{
    console.log("data",data)
    try {
        // Configure the request
        let config = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: `${base_url}/api/v1/customer/contactUs`, // Assuming baseUrl is defined somewhere
            data:data // Send the entire data object as a JSON string
        };

        console.log("config",config)

        // Make the API call
        let response = await apiCall(config, dispatch);
        console.log("response",response);


        // Dispatch the response to the reducer
        dispatch({
            type: CONTACT_US,
            payload: response.data // Ensure you send response data
        });
    } catch (error) {
        dispatch({
            type: CONTACT_US,
            payload: error.response ? error.response.data : 'An error occurred'
        });
        console.error('Error registering user:', error.response);
    }
}

