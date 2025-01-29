import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { DishContext } from "./contextHook";

export const Cart = () => {
  const { arrCart, setarrCart } = useContext(DishContext);
  const [Cartshow, setCartshow] = useState(false);
  const { updateToast}=useContext(DishContext);
  const {  setToastColor } = useContext(DishContext);
  const {setActive}=useContext(DishContext)

  useEffect(() => {
    const storedItems = localStorage.getItem("DishItems");
    async function store() {
      if (storedItems) {
        const parseItems = await JSON.parse(storedItems);
        setarrCart(parseItems);
      }
    }
    store();
  }, [setarrCart]);
  useEffect(() => {
    localStorage.setItem("DishItems", JSON.stringify(arrCart));
  }, [arrCart]);
  const handleCart = () => {
    setCartshow(true);
  };
  const handleCount = (food_quantity, price, e, id, pricePerItem) => {
    if (e.target.textContent === "+") {
      const incrementValue = arrCart.map((item) =>
        item.id === id
          ? {
              ...item,
              food_quantity: item.food_quantity + 1,
              price: (item.food_quantity + 1) * pricePerItem,
            }
          : item
      );
      setarrCart(incrementValue);
    } else if (e.target.textContent === "-") {;
      const decrementValue = arrCart.map((item) =>
        item.id === id
          ? {
              ...item,
              food_quantity: Math.max(1, item.food_quantity - 1),
              price:
                item.food_quantity > 1 ? item.price - pricePerItem : item.price, 
            }
          : item
      );
      setarrCart(decrementValue);
    }
  };

  const handleDelete = (id) => {
    let filteredarrCart = arrCart.filter((item) => item.id !== id);
    setarrCart(filteredarrCart);
    
    let deletedItem= arrCart.find(function(item)
        {
          return item.id===id
        });
     
        setActive(true);
        setToastColor('red');
        updateToast(`${deletedItem?.food_name} removed`);

        setTimeout(() => {
          updateToast()
          setActive(false)
        }, 4000);
    

  };
  const handlePurchase=()=>{
    
    setActive(true);
    setToastColor('green');
    updateToast(`Order placed`);
    setTimeout(()=>{
     setActive(false);
     updateToast();
     
    },4000)
  }

  return (
    <>
      <button
        className="p-3 border-1 rounded background shadow-lg hover btn btn-success"
        onClick={handleCart}
      >
        <FontAwesomeIcon icon={faCartShopping} className="bgcat text-white" />
        <span>{arrCart && arrCart.length}</span>
      </button>
      <div
        className="CartSection text-end "
        style={{ display: Cartshow ? "block" : "none" }}
      >
        <h4 className="float-start text-success ms-3 ">OrderItems</h4>
        <button
          onClick={() => setCartshow(false)}
          className=" btn btn-success mr-1"
        >
          <FontAwesomeIcon icon={faX} className="bgcat text-white" />
        </button>

        <div className="AllCardsSection d-flex flex-column justify-content-center ">
          {arrCart &&
            arrCart.map((items) => {
              return (
               
                <li  key={items?.id}
                  
                  className="list-unstyled d-flex align-item-center justify-content-around ms-4 me-4 p-2  border border-1 text-center shadow   rounded "
                >
                  <h1 className="fs-6 ">{items?.food_name}</h1>
                  <img
                    src={items?.food_image}
                    alt="image not found"
                    className="ms-2 img-fluid"
                    style={{ width: "3rem", height: "3rem" }}
                  />

                  <span> {items?.food_type}</span>
                  <div
                    onClick={(e) =>
                      handleCount(
                        items?.food_quantity,
                        items?.price,
                        e,
                        items?.id,
                        items?.pricePerItem
                      )
                    }
                  >
                    <button className="  btn btn-primary">+</button>
                    <span className=" mt-2 bg-secondary-subtle p-2 border border-1 rounded">
                      {items?.food_quantity}{" "}
                    </span>
                    <button className=" btn btn-secondary">-</button>
                  </div>
                  <p className="text-success">Rs:{items?.price}/-</p>
                  <button
                    className=" btn btn-danger"
                    onClick={() => handleDelete(items?.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
                
              );
            })}
        </div> 
        <div className="billingSection d-flex flex-column justify-content-between ">
          <hr />
          <div className="line-item">
            <p>subtotal:</p>
            <p className="text-success">
              Rs:{arrCart.reduce((totalPrice, currentValue) => {
                return totalPrice + currentValue.price;
              }, 0)}
              /- only
            </p>
          </div>
          <div className="line-item">
            <p>Tax:</p>
            <p className="text-success">Rs:{50}/-</p>
          </div>
          <hr />
          <div className="line-item">
            <h3>Total Price:</h3>
            <h3 className="text-success">
              Rs:{arrCart.reduce((totalPrice, currentValue) => {
                return totalPrice + currentValue.price;
              }, 50)}
              /- only
            </h3>
          </div>
        </div>
        <div className="d-flex align-center justify-content-center">
        <button type="button" className="btn btn-primary border border-1"  onClick={handlePurchase} 
        >
          Place Order
        </button>
        </div>
       
      </div>
    </>
  );
};
