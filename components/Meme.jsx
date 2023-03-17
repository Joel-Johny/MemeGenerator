import React from "react"
import memesData from "../memesData"
export default function Meme (){


    const [memeData,setMemeData]=React.useState({
        top:"",
        bottom:"",
        image:"https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function generate(){
        const memesArray=allMemeImages.data.memes
        const random=Math.floor(Math.random()*memesArray.length)
        const image=memesArray[random].url
        setMemeData((oldval)=>{
            return {...oldval,image:image}
        })
    }

    function handleChange(event){
        const {name,value}=event.target
        setMemeData((old)=>{
            return {
                ...old,
                [name]:value
            }
        })

    }
    return(

        <div>

        <div className="container">
                <input name="top" className="input" placeholder="Text1"  value={memeData.top} onChange={handleChange}></input>
                <input name="bottom" className="input" placeholder="Text2" value={memeData.bottom} onChange={handleChange}></input>
                <button id="submit" onClick={generate}>Get a new meme image !  🖼</button>
        </div>

        <div className="meme-container">
            <img src={memeData.image} className="meme-image"/>
            <h2 className="meme--text top">{memeData.top}</h2>
            <h2 className="meme--text bottom">{memeData.bottom}</h2>
        </div>
        
        </div>
    )
}