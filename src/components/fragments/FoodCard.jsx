import PropTypes from "prop-types";
import Button from "../elements/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ title, cover, price, cart, setCart, setTotalPrice }) => {
  // for redirecting / navigating
  const navigate = useNavigate();

  // Function add to cart
  const addToCard = (title, cover, price) => {
    let existingItem = cart.find((item) => item.title == title);

    if (existingItem) {
      setCart(
        cart.map((menu) =>
          menu.title == title ? { ...menu, qty: menu.qty + 1 } : menu
        )
      );
    } else {
      const newItem = { title, cover, price, qty: 1 };
      cart = [...cart, newItem];
      setCart(cart);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <div className=" flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg ">
      <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
        <img
          src={cover}
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex justify-between">
          <p className="text-slate-800 w-2/3 text-lg font-semibold">{title}</p>
          <p className="text-cyan-600  font-semibold">
            Rp {price.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type={"button"}
            onClick={() => navigate(`update/${title}`)}
            className={"w-full mt-6 bg-blue-500 hover:bg-blue-600"}
          >
            Edit Menu
          </Button>
          <Button
            type={"button"}
            onClick={() => addToCard(title, cover, price)}
            className={"w-full"}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setCart: PropTypes.any,
  cart: PropTypes.array,
  setTotalPrice: PropTypes.any,
};

export default FoodCard;
