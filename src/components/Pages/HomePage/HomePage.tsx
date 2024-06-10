import React, { useState } from "react";
import Experience from "../../../ThreeJs/Experience";
import { TestPage } from "./TestPage";
import Frame from 'react-frame-component'
import ReactDOM from "react-dom";

export const HomePage: React.FC = () => {
    return (
        <>
        {/* <h1>HomePage</h1> */}
        <Experience />

        
        {/* <Frame width={1000} height={1000}>
        <TestPage />
        </Frame> */}
        </>
    )
    
}
