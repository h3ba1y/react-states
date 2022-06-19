import React from "react"
import MemeData from "../Data/memeData";

function Meme()
{
  
  const [memeData, setMemeData] = React.useState({
      topTex: "",
      bottomTex:"",
      randomImage:"http://i.imgflip.com/1bij.jpg"
  });

  function getMemeImage()
  {
        const memes = MemeData.data.memes;
        const meme = memes[Math.floor(Math.random() * memes.length)];
        const url = meme.url;
        setMemeData(prevMemeData => ({
            ...prevMemeData,
            randomImage: url
        }));
  }

  function addTopText()
  {
        setMemeData(prevMemeData => ({
            ...prevMemeData

        }));
  }

  function addBottomText()
  {
        setMemeData(prevMemeData => ({
            ...prevMemeData
        }));
  }

  return (
      <main>
        <div className="form">
            <input 
                type="text" 
                placeholder="Top text"
                className="form--input"
                onChange={addTopText}
            />
            <input 
                type="text" 
                placeholder="Bottom text"
                className="form--input"
                onChange={addBottomText}
            />
            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img 
            src = {memeData.randomImage} 
            className="meme--image" 
        />
      </main>
  )
}
export default Meme;