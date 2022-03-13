import React from "react";
// import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link link-dark px-2 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-2" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-2" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-2" href="#">
                About
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link link-dark px-2" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-dark px-2" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My First React App</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              placeholder="Search..."
              className="form-control"
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </>
  );
}

function Content() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
      <p className="col-md-8 fs-4">
        Using a series of utilities, you can create this jumbotron, just like
        the one in previous version of Bootstrap. Check out the example below
        for how you can remix and restyle it in to liking.
      </p>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Example button
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is my first modal box</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-muted py-5 border-top">
      <div className="container">
        <p className="mb-1">This is My First React App in Bootsrap.</p>
        <p className="mb-0">
          New to react? <a href="https://reactjs.org">Visit</a>
        </p>
      </div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="container">
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
