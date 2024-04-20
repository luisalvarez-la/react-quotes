import React from 'react'

const Phrase = ({phraseSelected}) => {
  return (
    <div className='text-white italic mb-5 text-xl'  >{phraseSelected.phrase}</div>
  )
}

export default Phrase