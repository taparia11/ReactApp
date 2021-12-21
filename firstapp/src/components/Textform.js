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

    const handleCopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        var newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    

    const[text,setText] = useState("Enter Your Text Here");
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'white'}} id="mybox" rows="4"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.length - text.split(" ").length +1} characters and {text.split(" ").length} words</p>
            <h1>Preview</h1>
            <p>{text}</p>
            </div>
        </>
    );
}
