import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup,faMugSaucer,faMartiniGlass,faBowlRice,faPizzaSlice,faBurger,faBacon} from '@fortawesome/free-solid-svg-icons';


const Categories = [
    {
        id:1,
        name:"All",
        icon:<FontAwesomeIcon icon={faLayerGroup} className='bgcat h-25 ' />,
    },
    {
        id:2,
        name:"breakfast",
        icon:<FontAwesomeIcon icon={faMugSaucer} className='bgcat h-25 ' />,
    },
    {
        id:3,
        name:"soups",
        icon:<FontAwesomeIcon icon={faMartiniGlass} className='bgcat h-25 ' />,
    },
    {
        id:4,
        name:"pasta",
        icon:<FontAwesomeIcon icon={faBacon} className='bgcat h-25 ' />,
    },
    {
        id:5,
        name:"main_course",
        icon:<FontAwesomeIcon icon={faBowlRice} className='bgcat h-25 '/>,
    },
    {
        id:6,
        name:"pizza",
        icon:<FontAwesomeIcon icon={faPizzaSlice} className='bgcat h-25  '/>,
    },
    {
        id:7,
        name:"burger",
        icon:<FontAwesomeIcon icon={faBurger} className='bgcat h-25  '/>,
    },
    
    ]
    
    export default Categories