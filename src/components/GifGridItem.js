import React from 'react'

const GifGridItem = ( {id,title,url} ) => {
    
    console.log(id,title,url);
    
    return (
        <div className="card animate__animated animate__fadeIn">

            <header></header>
            <img src={url} alt={title}/>
            <div className="content">
                <p>{title}</p>
            </div>

        </div>
    ) 
}

export default GifGridItem
