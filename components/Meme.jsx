import React from "react"
export default function Meme (){


    const [memeData,setMemeData]=React.useState({
        top:"",
        bottom:"",
        image:"https://i.imgflip.com/30b1gx.jpg",
        name:"Drake Hotline Bling"
    })
    const [allMeme, setAllMeme] = React.useState("")

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMeme(data))
    },[])
    function generate(){
        const memesArray=allMeme.data.memes
        const random=Math.floor(Math.random()*memesArray.length)
        const image=memesArray[random].url
        const name=memesArray[random].name
        setMemeData( { top:"", bottom:"",image:image,name:name } )
        
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
    function newTab(){
        const string=memeData.name+" meme example"
        const urlOpen=`https://www.google.com/search?q=${encodeURIComponent(string)}&tbm=isch`
        window.open(urlOpen, '_blank', 'noopener,noreferrer');
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

        <div className="meme-name">
            <h2>Meme Name : {memeData.name}</h2>
        </div>
        <button id="example" onClick={newTab}>Example</button>


        
        </div>
    )
}