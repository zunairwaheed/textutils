import React ,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked " + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted " , "success")
  }

  const handleLowerClick = ()=>{
    // console.log("Lowercase was clicked " + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted " , "success")
  }

  const handleCapitalizeClick = ()=>{
    // console.log("Lowercase was clicked " + text)
    let newtext = text.charAt(0).toUpperCase() + text.substring(1);
    setText(newtext)
    props.showAlert("Converted " , "success")
  }

  const handleClearClick = ()=>{
    // console.log("Lowercase was clicked " + text)
    let newtext = '' ;
    setText(newtext)
    props.showAlert("Converted " , "success")
  }

  const handleOnChange = (event)=>{
    // console.log("handleOnChange was clicked")
    setText(event.target.value)
  }


  const [text, setText] = useState("")
  return (
    <>
    <div className="container"  style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="9" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white' , color:  props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into UPPERCASE</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert into lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Convert into Capitaize case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split (" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split (" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter your text in textbox"}</p>
    </div>
    </>
  );
}
