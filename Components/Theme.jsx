
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect} from 'react';
import { DishContext } from './contextHook';


export const Theme=()=>{
     const { theme,settheme}=useContext(DishContext);
     
     useEffect(()=>{
       document.body.style.backgroundColor=theme;
       theme==='black'? document.body.style.color='#eee':document.body.style.color='black'
       
     },[theme])
    

const handleTChange=()=>{
    settheme(theme === 'black' ? 'gainsboro' : 'black');
}

     return(
        <>
        <button className={`${theme==='black'?'bg-white':'bg-transparent'}  rounded-circle p-3`} style={{border:'1px dotted black'}}
        onClick={handleTChange}>
          {
            theme==='gainsboro'? <FontAwesomeIcon icon={faMoon} />:<FontAwesomeIcon icon={faCloudSun}  /> 
          }  
        </button>
        </>
     )


}