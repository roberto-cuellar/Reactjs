import React, { useState } from 'react'
import PropTypes from "prop-types"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState(""); /// Sin nada, es undefined, con "" es un string vacio

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);


    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){ /// El método trim() borra los espacios antes y después
            setCategories(prev => [inputValue,...prev])  ;
            setInputValue("");
        }
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value = {inputValue}
            onChange ={handleInputChange}
        />
    </form>
      
  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}


export default AddCategory  