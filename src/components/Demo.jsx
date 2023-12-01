import React from "react";
import logo from "../assets/Logo.png";
import Titanic from "../assets/screenshot.gif";
import "./Demo.css"

function Demo() {
    return (
        <div className="demo" id="demo">
            <div className="container">

                <div className="col-1">
                    <img className="logo" src={logo} alt=" "/>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aperiam architecto asperiores blanditiis consequuntur cum cumque distinctio eius ex in iure iusto nemo nesciunt, nihil odio officiis qui quod sapiente sit sunt suscipit tenetur.</p>
                    <button className="button">Vraag professioneel advies aan!</button>
                </div>
                <div className="col-2">
                    <iframe width="570" height="320" src={Titanic} title="Video Titanic" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    );
}

export default Demo;
