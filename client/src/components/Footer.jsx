import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-uppercase text-white mb-4">About</h4>
              <p className="text-muted">
                The app allows users to set their fitness goals and then
                provides them with a customized workout plan based on their
                needs and preferences.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-uppercase text-white mb-4">Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-uppercase text-white mb-4">Contact</h4>
              <p className="text-muted">
                Lahore
                <br />
                Punjab
                <br />
                Pakistan
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-uppercase text-white mb-4">Follow us</h4>
              <i className="fab fa-facebook fa-2x mr-3 text-white">Facebook</i>
              <i className="fab fa-twitter fa-2x mr-3 text-white">Instagram</i>
              <i className="fab fa-instagram fa-2x mr-3 text-white">Twitter</i>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary p-2">
          <p className="text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
