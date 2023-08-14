import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="PageNotFound">
        <div className="PageNotFound-content">
          <h1 className="PageNotFound-title">Looking for something?</h1>
          <p className="PageNotFound-p">
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
          <Link to="/" className="PageNotFound-btn">
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
