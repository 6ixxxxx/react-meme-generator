import React from "react"

const Meme = () => {
    
    const [meme, setMeme]=React.useState([])
    
 
    const [setUrl, setState]=React.useState({
          topText:"",
          bottomText:"",
          url:"http://i.imgflip.com/1bij.jpg"})
     
  
    function getMemeImage(event) {
       const randomNumber = Math.floor(Math.random() * meme.length)
       const uRl = meme[randomNumber].url
       
    setState(newLink =>({...newLink, 
    
            url: uRl}))
    }
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMeme(data.data.memes))
            console.log("Dun")
    }, [])
    
    function setValues(event){
        const {value, name} = event.target
        setState( memeText => 
            ({...memeText, 
            [name]:value})
        )
        
    }
    
    return(
        <main className="memebox"> 
         <div>  
            <div className="inputs">
                <input 
                    type="text" 
                    autoComplete="off"
                    placeholder="Top text"
                    name="topText"
                    onChange={setValues}
                    value={setUrl.topText}></input>
                    
                <input 
                    type="text" 
                    autoComplete="off"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={setValues}
                    value={setUrl.bottomText}></input>
            </div>
            <button className="button"
                    onClick={getMemeImage}
                    >Get a new meme image 🖼</button>
        </div>
        <div className="meme--div">
        <img alt="meme sample" src={setUrl.url}/>
        <h2 className="meme--text top">{setUrl.topText}</h2>
        <h2 className="meme--text bottom">{setUrl.bottomText}</h2>
        </div>
        </main>
    )
}

export default Meme