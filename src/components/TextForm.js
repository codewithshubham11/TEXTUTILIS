import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const hendleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase", "success");

    }
    const hendleLwClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase", "success");

    }
    const hendleClearText = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("clear all text", "success");
    }
    const hendleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text copy to clipboard", "success");
    }
    const hendleextraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }
    const hendleonChange = (event) => {

        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={hendleonChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={hendleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={hendleLwClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={hendleClearText}>Clear text</button>
                {<button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={hendleCopy}>Copy</button>}
                <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={hendleextraspace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your Text Summary</h2>
                <p><b>Number of words {text.split(" ").filter((element) => { return element.length !== 0 }).length} and characters {(text.length)}</b></p>
                <p><b> {((text.split(" ").filter((element) => { return element.length !== 0 }).length)) * .008}minute to read time </b></p>
                <h2>Priview</h2>
                <p>{text.length > 0 ? text : "Nothing to Priview!"}</p>
            </div>
        </>
    )
}
