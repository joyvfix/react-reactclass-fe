import { useEffect, useState } from "react";
import FoodCard from "../../components/fragments/FoodCard";
import { foodMenu } from "../../constants/food-data";
import Button from "../../components/elements/Button";
import { getMenu } from "../../services/menu.services";
import Swal from "sweetalert2";

const DashboardPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const localDataCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(localDataCart);

    if (cart.length > 1) {
      setTotalPrice(cart.reduce((acc, menu) => acc + menu.qty * menu.price));
    }

    getMenu((status, res) => {
      if (status) {
        console.log(res);
      } else {
        alert(res);
      }
    });
  }, []);

  const handleCheckout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Checkout now",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,checkout now",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success",
          text: "Your order successed to checkout",
          icon: "success",
        });
        localStorage.removeItem("cart");
        setCart([]);
      }
    });
  };
  return (
    <div className="flex gap-5 w-full">
      {/*  === Food Menu === */}
      <section className="w-[70%]">
        <div className="grid grid-cols-3 gap-5">
          {foodMenu.map((menu, idx) => {
            return (
              <FoodCard
                cart={cart}
                setCart={setCart}
                cover={menu.cover}
                title={menu.title}
                price={menu.price}
                key={idx}
                setTotalPrice={setTotalPrice}
              />
            );
          })}
        </div>
      </section>

      {/* === Summary === */}
      <aside className="w-[30%] flex flex-col gap-5 pr-5">
        <h2>My Order</h2>
        <hr />
        {/* === Product List === */}
        {cart.length > 0 && (
          <table className="product-list border-collapse">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((menu, idx) => (
                <tr key={idx}>
                  <td className="p-2">
                    <img
                      src={menu.cover}
                      alt={menu.title}
                      className="max-w-[70px] max-h-[70px] object-cover rounded-md"
                    />
                  </td>
                  <td>{menu.title}</td>
                  <td className="text-center">{menu.qty}</td>
                  <td>Rp {(menu.price * menu.qty).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* === Checkout Button === */}
        {cart.length > 0 ? (
          <div>
            <div className="total-price flex justify-between items-center">
              <h3>Total Price</h3>
              <p className="font-semibold text-lg text-teal-500">
                Rp {totalPrice.toLocaleString()}
              </p>
            </div>
            <Button
              onClick={() => handleCheckout()}
              className={"py-4 font-semibold text-[18px] w-full mt-6"}
            >
              Checkout
            </Button>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-500">
            Your Order will appear here
          </div>
        )}
      </aside>
    </div>
  );
};

export default DashboardPage;
