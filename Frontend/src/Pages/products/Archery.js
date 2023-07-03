import React from "react";
import { useState } from "react";
import archery from "./images-of-products/archery.jpg";
import { useNavigate } from "react-router-dom";
import UserHeader from "../UserHeader";
import Footer from "../Footer";
import emailjs from "emailjs-com";

function Archery() {
  const navigate = useNavigate();
  let [value, setValue] = useState(1);
  let plusFunction = () => {
    setValue(value + 1);
  };
  let minusFunction = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  let BuyNow = async () => {
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    try {
      // Send the email using emailjs
      const result = await emailjs.send(
        "service_yq2h1ur",
        "template_tetmz5v",
        {
          to_email: loggedInUserEmail,
        },
        "j-ng0JjdfpbVKQiMd"
      );

      console.log(result);

      // Redirect to the checkout page
      navigate("/CheckOut", { replace: true });
    } catch (error) {
      console.error("Error occurred during purchase:", error);
    }
  };

  return (
    <>
      <UserHeader />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-6 p-5">
            <div>
              <img
                src={archery}
                alt="archery"
                style={{ width: "450px", height: "450px" }}
              />{" "}
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="mt-5">
              <h2>Handmade Wooden Bow Arrow Set</h2>
            </div>
            <p className="mb-5">Brand:adventure awaits!</p>
            <h3 className="mb-3">₹ 6,150</h3>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <div className="input-group w-25">
                <button className="btn btn-secondary" onClick={minusFunction}>
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  value={value}
                  readOnly
                />
                <button className="btn btn-secondary" onClick={plusFunction}>
                  +
                </button>
              </div>
            </div>
            <input
              type="button"
              value="Buy NOW"
              className="w-20 p-2 text-md btn btn-md btn-primary"
              onClick={BuyNow}
            />
            <p className="mt-5">About the product:</p>
            <ul>
              <li>
                SIMPLE DESIGN: This recurve bow and arrows set is simple
                designed for beginner and Professionals, designed for right hand
                shooters, very easy to assemble and use.
              </li>
              <li className="mt-1">
                HIGH QUALITY: Wooden alloy riser, strong fiberglass limb. Smooth
                edge will protect you from getting hurt.
              </li>
              <li className="mt-1">
                Our Arrows are the Heritage of Traditional Archery. For those
                committed to the sport of traditional archery
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="mb-4">Our Guarantees</h4>
          <div className="col">
            <i className="fa fa-truck fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;5-day delivery</h6>
          </div>
          <div className="col">
            <i className="fa fa-box mr-2 fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;Easy returns</h6>
          </div>
          <div className="col">
            <i className="fa fa-money-bill-wave fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;Pay on Delivery</h6>
          </div>
          <div className="col">
            <i className="fa fa-check fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;2 years warranty</h6>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="mb-2">Customer Reviews</h4>
          <div>
            <h5>
              4.0 stars
              <span>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
              </span>
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label className="form-label">Write a Review:</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="reviews mt-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">@priyanka</h6>
                  <p className="card-text">
                    Just be a little safe and you're good to go. Durable, will
                    last for years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Archery;
