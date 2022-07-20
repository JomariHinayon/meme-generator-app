import react from "react"
import memesData from "./../memesData"

export default function Meme (){

    const [memeImage, setMemeImage] = react.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    

    function textHandleChange(event) {
        const {name, value} = event.target
        setMemeImage( prevText => {
            return {
            ...prevText,
            [name] : value
            }
        })
    }

   const [allMemeImages, setALLMemeImages] = react.useState(memesData)

   react.useEffect( () => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setALLMemeImages(data.data.memes))
   }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
        <div className="form">
            <input type="text" 
            className="form-input" 
            placeholder="Top text" 
            name="topText" 
            value={memeImage.topText} 
            onChange={textHandleChange}/>

            <input type="text" 
            className="form-input" 
            placeholder="Bottom text" 
            name="bottomText" 
            value={memeImage.bottomText}  
            onChange={textHandleChange} />

            <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme-container">
        <div className="meme-text-top">
        <h2>{memeImage.topText}</h2>
        </div>
        <img className="meme-image"  src={memeImage.randomImage} />
        <div className="meme-text-bottom">
        <h2>{memeImage.bottomText}</h2>
        </div>
        </div>
        </main>

        
    )
}