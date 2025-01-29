import { useContext, useEffect } from "react";
import { Food_items } from "../Api/Menulist";
import { Dishcard } from "./dishCard";
import { Shimmer } from "./shimmerUi";
import { DishContext } from "./contextHook";


export const Hero = () => {
  const { filterCardProvider, setfilterCardProvider } = useContext(DishContext);
  const { Alldishes,setAlldishes}=useContext(DishContext);

  useEffect(() => {
    getDishinfo();
  }, []);

   function getDishinfo() {
    
    try {
      setTimeout(() => {
        setAlldishes(Food_items);
        setfilterCardProvider(Food_items);
      }, 2000);
    }
     catch (err) {
      console.log(err);
    }
  }
 if(!Alldishes) return null;
  return Alldishes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mx-5 adjustment">
        <div className="d-flex  flex-wrap   ">
          {filterCardProvider.map((items) => {
            let { id } = items;
            return <Dishcard {...items} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};
