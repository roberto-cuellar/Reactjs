import React, { useState } from 'react'
import AddCategory from './componets/AddCategory';
import {GifGrid} from './componets/GifGrid';

const GifExperftApp = () => {
   
    const [categories, setCategories] = useState(["Rick and Morty"]);
   

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory  setCategories={setCategories}/>
        <hr />
        {
            categories.map((category)=>{
                return <GifGrid key = {category} category={category}/>
            })
        }
        
        
      </>
    
  )
}

export default GifExperftApp
