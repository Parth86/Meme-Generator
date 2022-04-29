import './App.css';
import React from 'react'

function App() {

  const url = "https://api.imgflip.com/get_memes"
  const [memesData, setMemesData] = React.useState()
  const [meme, setMeme] = React.useState("")
  const [texts, setTexts] = React.useState({"top-text": "", "bottom-text": ""})

  React.useEffect(() => {
    fetch(url).then(res => res.json()).then(json => setMemesData(json.data.memes))
  }, [])

  function handleClick() {
    const randNum = Math.floor(Math.random() * memesData.length)
    setMeme(memesData[randNum].url)
  }
  function handleChange(e) {
    setTexts({...texts, [e.target.name]: e.target.value})
  }
  return (
    <div className="App">
      <header>
        <h2>Meme Generator</h2>
      </header>
      <div className='form'>
        <input type="text" className="formInput" placeholder="Top Text" onChange={handleChange} name="top-text" value={texts["top-text"]}/>
        <input type="text" className="formInput" placeholder="Bottom Text" name="bottom-text" onChange={handleChange} value={texts["bottom-text"]} />
        <button className="formButton" onClick={handleClick}>Get a new Meme Image</button>
      </div>
      <div className='memeImage' >
        <h2 className='meme-text top'>{texts["top-text"]}</h2>
        <img src={meme} id="meme" alt="meme" />
        <h2 className='meme-text bottom'>{texts["bottom-text"]}</h2>
      </div>
      
    </div>
  );
}

export default App;
