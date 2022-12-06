import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../cartComponents/CartItem";
import { useCartContext } from "../context/cartContext";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button";
import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const { cart, clearCart, shippingFees, total_price } = useCartContext();
  const { isAuthenticated, user } = useAuth0();
  console.log("🚀 ~ file: Cart.js:11 ~ Cart ~ user", user)
  return (
    <Wrapper>
      <div className="container">
        {isAuthenticated && (
          <div className="cart-user--profile">
            <img src={user.picture} alt="user.name" />
            <h2>{user.name}</h2>
          </div>
        )}
      </div>
      {cart.length > 0 ? (
        <div className="container">
          <div className="cart-heading grid-five-column grid">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((item, i) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <hr />
          <div className="cart-two-button">
            <NavLink to="/product">
              <Button>Continue Shopping</Button>
            </NavLink>
            <Button onClick={() => clearCart()} className="btn-clear">
              Clear Cart
            </Button>
          </div>
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div>
                <p>Subtotal:</p>
                <p>
                  <FormatPrice price={total_price} />
                </p>
              </div>
              <div>
                <p>Shipping Fee:</p>
                <p>
                  <FormatPrice price={shippingFees} />
                </p>
              </div>
              <hr />
              <div>
                <p>Order Total:</p>
                <p>
                  <FormatPrice price={total_price + shippingFees} />
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyDiv>
          <h3>Cart is empty</h3>
        </EmptyDiv>
      )}
    </Wrapper>
  );
};
const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
  h3 {
    font-size: 4.3rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;
const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    /* padding: 0 10px; */
    text-transform: capitalize;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
      text-transform: capitalize;
    }
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
