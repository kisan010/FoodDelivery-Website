import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faCookie} from '@fortawesome/free-solid-svg-icons';
import { Search } from './Search';
import { UserProfile } from './Userprofile';
import { Cart } from './Cart';
import { Theme } from './Theme';


export const Header=()=>{



    
    return(

        <>
        <>
        <div className="container-fluid text-center py-4">
            <div className="row">
                <div className="col-xl-2 col-lg-2  order-sm-1">
                    <h1 className='text-start'> 
                        <button className='px-2  border-0    shadow-lg bg-transparent '>
                        <FontAwesomeIcon icon={faCookie} className='bgcat' bounce /></button> </h1>
                </div>
                <div className="col-xl-7 col-lg-7 order-sm-1">
               <Search />
                </div>
                <div className="col-xl-3 col-lg-3 mt-3 d-flex justify-content-around CartProfile  order-sm-2">
                    <UserProfile />
                    <Cart />
                    <Theme />
                </div>
            </div>
        </div>
        </>
        </>
    )
}