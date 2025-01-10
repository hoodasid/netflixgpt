import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GptSuggestions from './GptSuggestions'
import { BgURL } from '../utils/Constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BgURL}
          alt="netflix"
        />
      </div>
      <GPTSearchBar />
      <GptSuggestions />
    </div>
  )
}

export default GPTSearch
