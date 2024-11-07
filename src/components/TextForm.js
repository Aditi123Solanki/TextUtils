import React,{useState} from 'react'
export default function TextForm(props) {
   
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        //  console.log("Upprecase was clicked");
         let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Conveted to Uppercase","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conveted to Lowercase","success");

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy = ()=>{
        let txt = document.getElementById("myBox");
        txt.select();
        txt.setSelectionRange(0,9999);
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to ClipBoard","success")
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  return (
<>
<div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label ">Text area</label>
    <textarea className={`form-control  bg-${props.mode}`} style={{ color: (props.mode==='light') ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="10"> </textarea>
    </div>
    <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button className="btn btn-outline-success mx-1 my-3" onClick={handleLowClick} >Convert to lowercase</button>   
    <button className="btn btn-outline-dark mx-1 my-3" onClick={handleCopy} >Copy</button>   
    <button className="btn btn-light mx-1 my-3" onClick={handleClearClick} >Clear</button>
</div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} charachters</p>
    <p> {0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  );
}
