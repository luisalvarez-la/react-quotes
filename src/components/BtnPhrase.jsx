import React from 'react'
import quotes from "../data/phrases.json"
import quoteRandom from '../utils/quoteRandom'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {

    const functionChange = () => {
        const indexRandom = quoteRandom(quotes.length)
        setPhraseSelected(quotes[indexRandom])
        setBgSelected(photos[quoteRandom(photos.length)])
    }
  return (
    <button className='dark:md:hover:bg-fuchsia-600 ml-auto block cursor-pointer bg-[#bd41bd] py-2 text-white rounded-md  p-4' onClick={functionChange}>Get Your React Lucky Quote!!</button>
  )
}

export default BtnPhrase