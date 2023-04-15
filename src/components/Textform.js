import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = '';
        setText(newtext);
    }

    const handleCopy = () =>{
         var text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
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
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




   </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the text box above to preview it here"}</p>
      </div>
   </>

  )
}
