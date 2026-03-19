import { useDispatch, useSelector } from "react-redux";
import "../css/cart.css";
import {clearCart} from "../../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="cart">
            <h1 className="cart-title">Your Cart</h1>
            <button onClick={()=>handleClearCart()} className="search-btn">Clear</button>

            {!cartItems?.length ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map((item) => (
                        <div className="cart-card" key={item.id}>
                            <div className="cart-img-wrapper">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="cart-content">
                                <h2 className="cart-name">{item.name}</h2>

                                <p className="cart-cuisine">
                                    {item.cuisine} • {item.difficulty}
                                </p>

                                <p className="cart-calories">
                                    {item.caloriesPerServing} kcal
                                </p>

                                <p className="cart-rating">
                                    ⭐ {item.rating} ({item.reviewCount})
                                </p>

                                <div className="cart-tags">
                                    {item.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;