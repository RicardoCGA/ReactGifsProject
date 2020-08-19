import React, { useState } from 'react';
import PropType from 'prop-types';

// Se recibe setCategories como un prop
const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('Categoria a agregar ...');
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleInputClick = (e) =>{
        setInputValue('');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if ( inputValue.trim().length > 2 )
        setCategories( categories => ([inputValue,...categories]) );
        setInputValue('Categoria a agregar ...');
    }

    const handleInputBlur = (e) => {
        if (inputValue.trim().length===0)
            setInputValue('Categoria a agregar ...')
    }

    const handleButtonSubmit = (e) =>{
        handleSubmit(e);
    }

    return (
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onClick={handleInputClick}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
            />
            <hr/>
            <button onClick={handleButtonSubmit}> Agregar </button>

          </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropType.func.isRequired,
};

export default AddCategory;

