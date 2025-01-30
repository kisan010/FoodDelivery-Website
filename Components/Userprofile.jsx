import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faX} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { DishContext } from './contextHook';


export const UserProfile=()=>{

    const[login,setLogin]=useState(false);
    const [user,setUser]=useState({username:'',password:'',email:''});
    const[showuser,setSHowuser]=useState('');
      const { updateToast}=useContext(DishContext);
      const {setActive}=useContext(DishContext);
      const {  setToastColor } = useContext(DishContext);
const handleLogin=()=>{

   setLogin(true);

}
const handleInput=(e)=>{
  
  setUser({...user,[e.target.name]:e.target.value});
}


    return(
        <>
        <button className='p-3 border-1 rounded  background shadow-lg hover bg-primary-subtle' onClick={handleLogin}>
        <FontAwesomeIcon icon={faUser} className='bgcat' />{showuser&& user.username}
        </button>
        <div style={{display:showuser?'block':'none'}} >
            <button className='btn btn-secondary' type="button" onClick={()=>{
                setLogin(false);
                updateToast(`${user.username} logged out`)
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
    <input type="text" className="form-control" name="username"  id="exampleUsername" placeholder='Enter Your name' onChange={handleInput} value={user.username} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" name='password' id="exampleInputPassword1"placeholder='Enter Your password'onChange={handleInput} value={user.password} required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
    <input type="email" className="form-control" name='email'   placeholder='Enter Your Email' id="exampleInputEmail1"onChange={handleInput} aria-describedby="emailHelp" value={user.email}  required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" 
       onClick={(e)=>{
        if(user.username&& user.email&& user.password)
        {
      
        e.preventDefault();
        setLogin(false);
        setActive(true);
        setToastColor('lavender');
        updateToast(`WELCOME ${user.username}`);
        setSHowuser(user.username);
        setTimeout(() => {
            setActive(false)
             updateToast();
             
        }, 4000)  
       
        }
        else{
          return false;
        }}}>Login</button>
</form>
        </div>
        </>
    )
}