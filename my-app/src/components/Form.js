import React, {useState} from 'react'


export default function Form(props) {

    const handleUpClick=()=>{
        //sconsole.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
       
    }
    const handleLoClick=()=>{
     
      let newText= text.toLowerCase();
      setText(newText)
     
  }
  const handleClearClick=()=>{
     
    let newText='';
    setText(newText)
   
}

    const handleOnChange=(event)=>{
       
        setText(event.target.value);
    }
    const [text, setText]=useState('');
   
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',Color:props.mode==='dark'?'white':'black'}}id="my Box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
    </div>
    <div className="container my-3" stye={{Color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
     
    
   <p>{text.split(" ").length} words, {text.length} characters</p>
   <p>{0.008 * text.split(" ").length} Minute read</p>
   <h2>Preview</h2>
   <p>{text}</p>
    </div>

    </>
  )
}
