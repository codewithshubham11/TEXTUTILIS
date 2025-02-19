import React, { useState } from 'react'

export default function About(props) {
   /* const [myStyle,setMyStyle]=useState(
        {
            color:'white',
            backgroundColor:'black'
        })
       // const [btnText,setBtnText]=useState("Enable light Mode")
    
   /* const toggleStyle=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
           color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable light Mode")
    }
        else
        {
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable black Mode")
    }
        
    }*/
    let myStyle={
        color:props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode ==='dark'?'rgb(36,74,104)':'white',
        border:'2px solid',
        borderColor:props.mode ==='dark'?'white':'#042743'

    }
           
    return (
        
        <div className='container' style={{backgroundColor:props.mode ==='dark'?'rgb(36,74,104)':'white'}}>
            <h1 className='my-3' style={{color:props.mode ==='dark'?'white':'#042743'}}>About us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <strong>Analyze Your text</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Textutilis gives a way to analyze text quickly and eficiently. Be it word count, character count or </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Text utils is free character counter tool that provides instant count & word count statistics for a given
                            text. Textutils reports the Number of words and characters. thus it is suitable for writing text with word/ character
                            limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This word counter software works in any web browser such as crome,firefox, internet explore, safari, opera. It 
                            suits to count character in facebook, blog, books, excel document, pdf essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className='container my-3'>
            <button onClick={toggleStyle} type='button' className="btn btn-primary">{btnText}</button>
            </div>*/}
        </div>
    )
}

