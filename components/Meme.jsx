import React from "react"
import memesData from "../memesData"
export default function Meme (){


    const memesArray=memesData.data.memes
    const [img,setImg]=React.useState("")
    function generate(){
        const random=Math.floor(Math.random()*memesArray.length)
        const image=memesArray[random].url
        setImg(image)
    }

    return(

        <div>

        <div className="container">
                <input name="" className="input" placeholder="Text1"></input>
                <input name="" className="input" placeholder="Text2"></input>
                <button id="submit" onClick={generate}>Get a new meme image !  🖼</button>
        </div>

        <div className="meme-container">
            <img src={img} className="meme-image"/>
        </div>
        
        </div>
    )
}