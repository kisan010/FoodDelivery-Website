import {  useContext} from "react";
import Categories from "../Api/Category";
import { DishContext } from "./contextHook";
export const Buttongroup = () => {
  const {  setfilterCardProvider } = useContext(DishContext);
  const { Alldishes}=useContext(DishContext)
  const { toast}=useContext(DishContext);
  const {active}=useContext(DishContext)
  const { toastColor } = useContext(DishContext);


  const handleMenu = (item) => {
    if (!Alldishes) return;

    if (item?.name === "All") {
      setfilterCardProvider(Alldishes);
    } else {
      const categoryitems = Alldishes.filter((items) =>
        item?.name?.includes(items?.food_category)
      );

      setfilterCardProvider(categoryitems);
    }
  };
  return (
    <>
    <div className="toast "  style={{display:active? 'block':'none', backgroundColor: toastColor} }>
      {`${toast}  ` }
    </div>
      {Categories.map((items) => {
        return (
          <button
            className=" d-flex btn-css align-items-center justify-content-center flex-column-reverse shadow p-3 mb-3  rounded hover bg-success  bg-opacity-50 "
            key={items?.id}
            onClick={() => handleMenu(items)}
          >
            {items?.name}
            {items?.icon}
          </button>
        );
      })}
    </>
  );
};
