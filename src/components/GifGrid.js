import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'
// import PropTypes from 'prop-types'

const GifGrid = ({category}) => {
    
    //USANDO USE STATE ANTES DE CREAR CUSTOM HOOK
    // const [images, setImages] = useState([]);
    // SE UTILIZA NOMBRE:RENOMBRE PARA REDEFINIR NOMBRE DE VARIABLE RECIBIDA

    const {data:images,loading} = useFetchGifs(category);
    
    // Antes de usar custom Hook
    // useEffect( () => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // },[category] );

   
    
    return (
         <>
             <h3 className="animate__animated animate__fadeIn">{category}</h3>  
            {
                //SE UTILIZA CUANDO SE ESPERA UN SOLO RESULTADO 
                loading && <p className="animate__animated animate__flipInX">Cargando</p>
            }
            {
                    <div className="cards">
                    
                         {
                         images.map( 
                             image =>  <GifGridItem 
                                             key = {image.id}
                                             // Se envia elemento por elemento, no envuelto en un arreglo
                                             {...image}
                                             />
                             )
                         }        
                 </div>
            }
         </>
    )

}

// GifGrid.propTypes = {

// }

export default GifGrid
