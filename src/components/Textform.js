import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () =>{
         navigator.clipboard.writeText(text);
         props.showAlert("Text Copied", "success");
    }

    const handleExtraSpaces =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change"); 
        setText(event.target.value)
    }

    const[text, setText] = useState('');
    //  text = "newtext"         // It is a wrong way to change the state
    // setText = ("new text");   //this is correct way
  

  return (
    <>    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>    
        <h1 className='my-3'>{props.heading}</h1>
    <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




   </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text Summary</h1>
      <p>{(text.split(/s+/).filter((element)=>{return element.length!==0}).length)} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
   </>

  )
}
