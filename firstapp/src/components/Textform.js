import React, {useState} from 'react'


export default function Textform(props) {
    
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    
    const[text,setText] = useState("Enter Your Text Here");
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="4"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to lowerCase</button>
            </div>
            <div className="container my-4">
                <h1>Your text summary</h1>
                <p>{text.length - text.split(" ").length +1} characters and {text.split(" ").length} words</p>
            <h1>Preview</h1>
            <p>{text}</p>
            </div>
        </>
    );
}
