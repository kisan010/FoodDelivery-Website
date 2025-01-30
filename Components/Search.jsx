
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {  useContext, useState } from 'react';
import { DishContext } from './contextHook';
import { Filter } from './Filter';

                 
export const Search = () => {
   const [searchDish,setSearchDish]=useState('');
   const {setfilterCardProvider}=useContext(DishContext);
   const { Alldishes}=useContext(DishContext);

   const handleChange=(e)=>{
        setSearchDish(e.target.value);
   }
   const handleSubmit=()=>{
   const totalfilteringCards=Filter(searchDish,Alldishes);
     setfilterCardProvider(totalfilteringCards);
     
   }
 

    return (
        <>
            <form className='input-group w-100 d-flex h-100 align-center bg-white rounded'>
                <button className=' border border-0 opacity-25 bg-white ms-2' type='button' onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <label htmlFor="dish" className="form-label" />
                <input type="text" value={searchDish} className='py-3 form-control rounded border-start-0 focus ms-3 ' onChange={handleChange} name='dish' id="dish" placeholder="Search your Dish" />
            </form>


        </>
    )
}