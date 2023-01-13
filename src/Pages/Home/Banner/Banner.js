import React from "react";
import chair from "../../../assets/images/chair.png";

export default function Banner() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to our world!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
}