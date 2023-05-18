import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
//import Add from "./adding";
import './meme.css';
//import './ae.css';
//import Practice from "./practice";
//import Form from "./form";
//import Signup from "./signup";
//import "./form.css";
//import Set from "./setfunction";




class Meme extends Component {
    render() {
        return (
            <>
                <div className="body">
                 <Header/>
                  <Main/> 
                  {/* <Practice/> */}
                  {/* <Form/> */}
                  {/* <Signup/> */}
                  {/* <Add/> */}
                  {/* <Set/> */}
                    
                </div>
            </>

        );
    }
}


export default Meme;