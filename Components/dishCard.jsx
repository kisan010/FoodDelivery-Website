import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { DishContext } from "./contextHook";

export const Dishcard = ({
  id,
  food_name,
  food_category,
  food_type,
  food_quantity,
  food_image,
  price,
}) => {
  const { updateToast } = useContext(DishContext);
  const {  setActive } = useContext(DishContext);
  const { arrCart, setarrCart } = useContext(DishContext);
  const {  setToastColor } = useContext(DishContext);


  const styleObj = {
    width: "17rem",
    height: " auto",
  };

  const handleOrder = (food_name,id, food_category,food_type,food_quantity,food_image,price) => {
    // console.log(`${food_name} added `); show this in ui
   setToastColor('violet');
   setActive(true);
    updateToast(`${food_name} added`);
   
    setTimeout(() => {
      setActive(false);
      updateToast();
    }, 4000);
    const newCartItem = {
        food_name: food_name,
        id: id,
        food_category: food_category,
        food_type: food_type,
        food_quantity: food_quantity,
        food_image: food_image,
        price: price,
        pricePerItem:price/food_quantity
      };
       const exisitngProduct= arrCart.find(item=>item.id===id);
       if(exisitngProduct)
       {
       
        const updatedArrCart = arrCart.map(item =>
          item.id === id ? { ...item, food_quantity: item.food_quantity + 1,price:item.price + price } : item
      );
      setarrCart(updatedArrCart);
       
       }
       else{
        setarrCart((prevArrCart) => [...prevArrCart, newCartItem]);
       }
       
      
  };
  useEffect(()=>{

    localStorage.setItem('DishItems',JSON.stringify(arrCart))
  },[arrCart])
  return (
    <>
      <div
        className={`cards${id} allcards border border-black m-3 shadow hovgen`}
        style={styleObj}
        food_category={food_category}
       
      >
        <div className="image">
          <img
            src={food_image}
            alt="error"
            width="95%"
            height="auto"
            className="m-1"
          />
        </div>
        <div className="details">
          <h3>{food_name}</h3>
          <div className="pricing d-flex justify-content-around w-100">
            <p className="bgcat">Rs{price}/-</p>
            <p className="bgcat">
              {" "}
              {food_type === "non_veg" ? (
                <FontAwesomeIcon icon={faFish} />
              ) : (
                <FontAwesomeIcon icon={faCarrot} />
              )}
              {food_type}
            </p>
          </div>
        </div>
        <div className="dishbtn w-100" >
          <button
            className=" p-1 rounded border-0 m-1 bg-info  dishbtnHover"
            
            onClick={() =>
              handleOrder(
                food_name,
                id,
                food_category,
                food_type,
                food_quantity,
                food_image,
                price
              )
            }
          >
            Add to Dish
          </button>
        </div>
      </div>
    </>
  );
};
