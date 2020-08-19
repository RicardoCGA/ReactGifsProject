import React, {useState}  from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifSuggestApp = () => {
    
    // setCategories se exporta a AddCategory para ser tratado desde el componente
    //const [categories, setCategories] = useState(['One Punch', 'Psycho Pass', 'Macross'])
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>

          <h2>Gif Suggest</h2>
          <AddCategory setCategories={setCategories}/>
          
            {
                categories.map(each=>
                    // <li key = {each} > {each} </li>
                    <GifGrid 
                        key={each}
                        category={each}
                    />
                ) 
            }
          

        </>
    )
}

// GifSuggestApp.propTypes = {

// }

export default GifSuggestApp;
