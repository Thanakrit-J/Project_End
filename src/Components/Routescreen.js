import React from "react";
import{
    Routes,
    Route

} from "react-router-dom"
import Sign_in from "../Screen/Sign_in";
const Routescreen = () =>{
    return(
        <Routes>
            <Route path="/" element={<Sign_in/>}></Route>


        </Routes>
    )
}

export default Routescreen