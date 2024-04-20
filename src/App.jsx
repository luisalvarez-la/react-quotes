
import { useState } from 'react'
import './App.css'
import quotes from "./data/phrases.json"
import quoteRandom from './utils/quoteRandom'
import BtnPhrase from './components/BtnPhrase'
import Phrase from './components/Phrase'
import photos from "./data/photos.json"

function App() {

  const indexRandom = quoteRandom(quotes.length)
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])

  const [bgSelected, setBgSelected] = useState(photos[quoteRandom(photos.length)])

  const objStyle = {
    backgroundImage: `url(/fondo${bgSelected}.jpg)`
  }

  return (

    <div style={objStyle} className='min-h-screen flex justify-center items-center bg-cover bg-center ' >
      <h1 className="text-white absolute top-20 text-2xl uppercase font-bold max-w-[600px] bg-[#564a77dd] rounded-xl shadow-3xl p-4 m-2 font-family:'Noto Color Emoji'" >
        React Lucky Quotes!!
        </h1>

      <article className='max-w-[600px] p-4 bg-[#564a77dd] rounded-xl shadow-3xl m-2'>
        <Phrase phraseSelected={phraseSelected} />
        <BtnPhrase setPhraseSelected={setPhraseSelected} setBgSelected={setBgSelected} />
      </article>


    </div>


  )
}

export default App
