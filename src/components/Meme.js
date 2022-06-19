import React from "react"
import MemeData from "../Data/memeData";

function Meme()
{
  const [imageUrl, setImageUrl] = React.useState("");

  function getMemeImage()
  {
        const memes = MemeData.data.memes;
        const meme = memes[Math.floor(Math.random() * memes.length)];
        const url = meme.url;
        setImageUrl(url);
  }

  return (
      <main>
        <div className="form">
            <input 
                type="text" 
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text" 
                placeholder="Bottom text"
                className="form--input"
            />
            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            <img 
                src = {imageUrl} 
                className="meme--image" 
            />
        </div>
      </main>
  )
}
export default Meme;