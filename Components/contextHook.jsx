import { createContext,  useState } from "react";


export const DishContext = createContext(null);


export const DishProvider = ({ children }) => {
  const [filterCardProvider, setfilterCardProvider] = useState([]);
  const [Alldishes, setAlldishes] = useState([]);
  const [toast, updateToast] = useState();
  const [active, setActive] = useState(false);
  const [arrCart,setarrCart]=useState([]);
  const [toastColor, setToastColor] = useState('');
  
  return (
    <DishContext.Provider
      value={{
        filterCardProvider,
        setfilterCardProvider,
        Alldishes,
        setAlldishes,
        toast,
        updateToast,
        active,
        setActive,
       
        arrCart,
        setarrCart,
        toastColor,
        setToastColor
      }}
    >
      {children}
    </DishContext.Provider>
  );
};
