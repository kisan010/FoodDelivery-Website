import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faX} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { DishContext } from './contextHook';


export const UserProfile=()=>{

    const[login,setLogin]=useState(false);
    const [user,setUser]=useState('');
    const[showuser,setSHowuser]=useState('');
      const { updateToast}=useContext(DishContext);
      const {setActive}=useContext(DishContext);
      const {  setToastColor } = useContext(DishContext);
const handleLogin=()=>{

   setLogin(true);

}
const handleUsername=(e)=>{
  setUser(e.target.value);

}


    return(
        <>
        <button className='p-3 border-1 rounded  background shadow-lg hover bg-primary-subtle' onClick={handleLogin}>
        <FontAwesomeIcon icon={faUser} className='bgcat' />{showuser&& user}
        </button>
        <div style={{display:showuser?'block':'none'}} >
            <button className='btn btn-secondary' type="button" onClick={()=>{
                setLogin(false);
                updateToast(`${user} logged out`)
                setActive(true);
                setToastColor('brown');
               
                
                setTimeout(() => {
                    setActive(false);
                    updateToast();
                }, 4000);
                setSHowuser('');
                
                
            }}>logout</button>
        </div>
        <div className='SigninForm' style={{display:login===true && showuser==''?'block':'none'}}>
            <h3>Login form</h3>
        <button className='cross' onClick={()=>{setLogin(false)}}> <FontAwesomeIcon icon={faX} className='bgcat' /></button>
        <form>
  
  <div className="mb-3">
    <label htmlFor="exampleUsername" className="form-label">UserName:</label>
    <input type="text" className="form-control" id="exampleUsername" onChange={handleUsername} value={user}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" 
       onClick={(e)=>{
        e.preventDefault();
        setLogin(false);
        setActive(true);
        setToastColor('lavender');
        updateToast(`WELCOME ${user}`);
        setSHowuser(user);
        setTimeout(() => {
            setActive(false)
             updateToast();
             
        }, 4000);
        }}>Login</button>
</form>
        </div>
        </>
    )
}