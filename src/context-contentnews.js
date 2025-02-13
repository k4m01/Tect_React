import React from "react";
import { userContext } from "./context";

export default function News(){
    let user = React.useContext(userContext)

    const contentStyle = {
        textAlign: 'center',
        margin: 10,
        padding: 10
    }

    return(
        <div style={contentStyle}>Hello {user}</div>    
    )
}