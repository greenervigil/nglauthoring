import React from 'react';
import { HyperLink } from 'react-magma-dom';

export default function AuthoringMenu () {
    return (
        <div className="container" style={{border: "solid 1px", borderRadius: "10px", width: "300px", height: "300px"}}>
            <h3 style={{textAlign: "center"}}>Authoring</h3>
            <ul style={{listStyle: "none", padding: "10px"}}>
                <li><HyperLink block styledAs="Button" color="marketing" to="#">Book Configuration</HyperLink></li>
                <li><HyperLink block styledAs="Button" color="marketing" to="#">SRI Grammar</HyperLink></li>
                <li><HyperLink block styledAs="Button" color="marketing" to="#">Integrated Resources</HyperLink></li>
                <li><HyperLink block styledAs="Button" color="marketing" to="#">Objectives</HyperLink></li>
            </ul>
        </div>
    )
}