import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase" , "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase" , "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared" , "success");
  };

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To ClipBoard" , "success");
  }

  const handleExtraspace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed" , "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container" style={{color : props.mode ==='dark'?'white':'black' }}>
        <h2 className="mb-4" >{props.anything}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode ==='dark'?'#3e5780':'white' , color : props.mode ==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To UperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraspace}>
          Space Removed
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClClick}>
          Clear Text
        </button>
       
      </div>
      <div className="container my-3" style={{color :  props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter SomeThing To Preview It"}</p>
      </div>
    </>
  );
}
