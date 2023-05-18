import React from "react";
import memesdata from "./memesdata";


function Main() {
   
    const [memedata, setMemedata] = React.useState(
        {
            toptext:"",
            bottomtext:"",
            randomimg:"https://cdn.wallpapersafari.com/7/97/m2B9uJ.jpg"

        }
    )
   
    
    //const [allMemeImages, setAllMemeImages] = React.useState(memesdata)
    const [allMemes, setAllMeme] = React.useState([])
    React.useEffect(()=>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMeme(data.data.memes))
    })

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemedata(prevdata=>
            (
            {
                ...prevdata,
                randomimg:url
                
            }

            ))

}
function handlechange(event)
{
    const {name,value}=event.target
    setMemedata(prevdata=>
        (
        {    ...prevdata,
            [name]: value
            
        }))
        
}


    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="toptext"
                    value={memedata.toptext}
                    onChange={handlechange}

                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomtext"
                    value={memedata.bottomtext}
                    onChange={handlechange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>


            <div className="meme">
                <img
                src={memedata.randomimg} 
                className="meme--image"
                />
                <h2 className="meme--text top">{memedata.toptext}</h2>
                <h2 className="meme--text bottom">{memedata.bottomtext}</h2>
                

            </div>

        </main>
    );

}
export default Main;
