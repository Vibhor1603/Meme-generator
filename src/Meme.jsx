/* eslint-disable no-unused-vars */
import React from "react";
 
export default function Meme(){
    const[meme, setState] =React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    
    const[allmemes, setMeme] =React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMeme(data.data.memes))
    }, [])

    function URLgenerate(){

        const randomNumber = Math.floor(Math.random() * allmemes.length)
        let url = allmemes[randomNumber].url
        setState(memesObj=>{
            return {
                ...memesObj,
                randomImage:url
            
            }
        })
    }

function handleChange(event){

const {name, value} = event.target
setState(prevMeme => ({
    ...prevMeme,
    [name]: value
}))
}


    return(
        <div className="meme" >
            <div className="form" >
                <div className="first-text" >
            <label htmlFor="Top-text">Top Text :</label>
<input type="text" name="topText" id="Top-text" placeholder="top-text" 
value={meme.topText} onChange={handleChange}
/>
</div>
<br />
<div className="second-text" >
<label htmlFor="Bottom-text">Bottom Text :</label>
<input type="text" name="bottomText" id="Bottom-text" placeholder="bottom-text"
value={meme.bottomText} onChange={handleChange}/>
<br />
</div>
</div>
<button onClick={URLgenerate} >Get a new meme image <img src="./src/assets/picture.png" alt="img" className="pic-icon" /></button>
<div className="meme-box">

<img src={meme.randomImage} alt="meme" className="meme-img"  />
<h2 className="meme--text top">{meme.topText}</h2>
<h2 className="meme--text bottom">{meme.bottomText}</h2>
</div>
</div>
    )
}
