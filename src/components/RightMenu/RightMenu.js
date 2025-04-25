import React from "react";
import "./RightMenu.css";

const OrderMenu = () => {
  return (
    <div className="right-menu">
      <div className="header-actions">
        <div className="icon-group no-bg">
          <button className="icon-btn no-bg">
            <img src="/assets/images/chat.svg" alt="chat" />
          </button>
        </div>
        <div className="icon-group no-bg">
          <button className="icon-btn no-bg">
            <img src="/assets/images/notification.svg" alt="notification" />
          </button>
        </div>
        <div className="icon-group no-bg">
          <button className="icon-btn no-bg">
            <img src="/assets/images/setting1.svg" alt="settings" />
          </button>
        </div>
        <div className="user">
          <img src="/assets/images/placeholder.svg" alt="User profile" />
        </div>
      </div>
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#2E2E2E",
          marginBottom: "16px",
        }}
      >
        Your Balance
      </h3>

      <div
        style={{
          background: " #F8B602 100%",
          borderRadius: "20px",
          padding: "15px",
          display: "flex",
          position: "relative",
          marginBottom: "24px",
          alignItems: "center",
          height: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            marginRight: "10px",
            width: "50%",
          }}
        >
          <div
            style={{
              color: "#2E2E2E",
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "8px",
            }}
          >
            Balance
          </div>
          <div
            style={{
              color: "#2E2E2E",
              fontSize: "10px",
              fontWeight: "800",
              fontFamily: "sans-serif",
            }}
          >
            $12.000
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <img src="/assets/images/income.svg" alt="Top Up" />
            </div>
            <div
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Top Up
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <img src="/assets/images/profit.svg" alt="Transfer" />
            </div>
            <div
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Transfer
            </div>
          </div>
        </div>
      </div>
      {/*  cart section */}
      <div
        style={{
          padding: "5px 0",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#A098AE",
            marginBottom: "16px",
          }}
        >
          Your Address
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ color: "#F8912C", marginRight: "8px" }}>
              <img src="/assets/images/Location.svg" alt="Location" />
            </div>
            <span style={{ fontWeight: "600", fontSize: "16px" }}>
              Elm Street, 23
            </span>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #F8B602",
              borderRadius: "8px",
              color: "#F8912C",
              padding: "8px 15px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Change
          </button>
        </div>

        <p style={{ color: "#A098AE", fontSize: "14px", marginBottom: "15px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #A098AE",
              borderRadius: "8px",
              color: "#2E2E2E",
              padding: "10px 20px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Add Details
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #A098AE",
              borderRadius: "8px",
              color: "#2E2E2E",
              padding: "10px 20px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Add Note
          </button>
        </div>
      </div>
      <div className="cart-section">
        <h3>Order Menu</h3>
<div className="order-summary">
  <div className="order-item">
    <div className="order-item-details">
      <img
        src="/assets/images/pizza.svg"
        alt="Vegan Pizza"
        className="order-item-img"
      />
      <div>
        <div className="order-item-name">Vegan Pizza</div>
        <div className="order-item-qty">x1</div>
      </div>
    </div>
    <div className="order-item-price">+$5.59</div>
  </div>
  <div className="order-service">
    <div className="order-service-label">Service</div>
    <div className="order-service-fee">+$1.00</div>
  </div>
</div>
<div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span> <span className="cart-total-price">$202.00</span>
  
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
              border: "1px solid #e8e8e8",
              borderRadius: "16px",
              padding: "12px 16px",
              margin: "12px 0",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#F5F5F5",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }}
            >
              <img
                src="/assets/images/referral.svg"
                alt="Coupon"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
            <div
              style={{
                flexGrow: 1,
                fontWeight: 500,
                color: "#2E2E2E",
                fontSize: "14px",
              }}
            >
              Have a coupon code?
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#777",
                fontWeight: "bold",
              }}
            ></div>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
