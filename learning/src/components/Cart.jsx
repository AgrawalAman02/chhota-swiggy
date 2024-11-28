import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import emptyCartImage from "./images/image.png"

const Cart = () => {
  const itemCards = useSelector((store) => store.cart.items);
  const dispatch  = useDispatch();
  const handleClrCart =()=>{
    dispatch(clearCart())
  }

  return (
    <div className=" p-2 m-auto w-8/12 flex flex-col">

        <div className="flex justify-between m-2 p-4"> 
            <h2 className="text-center text-4xl font-bold font-serif ">Cart</h2>

            <button className="border rounded-2xl p-2 m-1 border-orange-500 bg-orange-500 text-white shadow-md hover:shadow-lg cursor-pointer  hover:scale-95 hover:transition-all" onClick={handleClrCart}>Clear Cart</button>
        </div>

        {itemCards.length === 0 && 
            <div className="p-6 flex justify-between mt-8 items-center">
                
                <div>
                    <h1 className="text-lg font-bold text-[#02060CBF] font-sans">Good Food is Always Cooking... </h1>
                    <h2 className="text-base text-[#02060C99] font-normal font-sans my-2 mx-0"> Your cart is empty. Add Something from the menu </h2> 
                    <Link to="/"><button className="border rounded-2xl p-2 m-1 border-orange-500 bg-orange-500 text-white shadow-md hover:shadow-lg cursor-pointer  hover:scale-95 hover:transition-all">Browse Restaurants</button></Link>
                </div>
                <img src={emptyCartImage} alt="EmptyCart"  className=" h-64 w-96"/> 
            </div>}
        
        <div className="cartItems">
            
            {itemCards.map((item) => (
                <div
                    className="dishCard flex justify-between items-center gap-8 px-6 py-2.5 font-semibold cursor-pointer border-b border-gray-300"
                    key={item.card.info.id}
                >
                    <div className="dishCard-description flex flex-col gap-2">
                        <h4 className="dishName text-lg font-bold text-[#02060CBF] font-sans">
                        {item.card.info.name}
                        </h4>
                        <p>Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        <p className="dish-Description text-base text-[#02060C99] font-normal font-sans my-2 mx-0">
                        {item.card.info.description}
                        </p>
                    </div>
                    <div className="self-start w-32 h-28 flex-shrink-0 flex flex-col items-center justify-center">
                        {item.card.info.imageId ? (
                        <img
                            src={CDN_URL + item.card.info.imageId}
                            alt="dishImg"
                            className="w-full h-full object-cover"
                        />
                        ) : null }
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default Cart;