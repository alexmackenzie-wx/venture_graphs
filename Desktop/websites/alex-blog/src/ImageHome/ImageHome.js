// Global Imports

import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

// Style imports

import "./ImageHome.css";

// Component imports

import image1 from "./AlexImagePN.png";
import Underline from "../Underline/underline";

// MailChimp API

const mailChimpApiKey = "29af470d6d9e2dc483b8eb67aa5d7478-us20";

//Components

class ImageHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    email: "",
    buttonText: "Subscribe",
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value.trim() });
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    this.setState({
      buttonText: "Subscribed!",
    });
  }

  render() {
    return (
      <Router>
        {/* <section className="polaroidCard"> */}
        <div className="AlexHomeImageDiv">
          {/* <section> */}
          <div className="row1">
            <img className="AlexImage1" src={image1} alt=""></img>
            <div className="textIntroCircle"></div>
            <div className="textIntro">
              <p id="helloWorldText">/*Hello, World Test*/ 🌍</p>
              <br></br>
              <p id="paragraph1">
                I'm Alex Mackenzie, currently the Head of Investors at{" "}
                <a href="https://websummit.com/">Web Summit</a>. Formerly,
                VMware.
              </p>
              <br></br>
              <p id="paragraph2">
                Welcome to the grand conclave of my interest set: Programming,
                crypto, open-source, venture, psychology, startups mexican food.
              </p>
              <br></br>
              <p id="paragraph3" className=" textDescription">
                I write in detail on the, oftentimes, technically complexed
                topics that I'd like to learn more about. This{" "}
                <a href="/Writing">post</a> is a good start if you're interested
                in learning something new.
              </p>
              <p className="textDescription"></p>
            </div>
          </div>
          {/* </section> */}
        </div>
        <div id="colorBlock1" className="colorBlock"></div>
        <div id="colorBlock2" className="colorBlock"></div>
        <div className="formDiv">
          <form className="formtest" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              // id="emailInput1"
              className="emailInput"
              value={this.state.email}
              placeholder="  Your email"
              type="email"
            ></input>
            <button
              onClick={this.handleSubmit}
              // id="subButton1"
              className="subButton"
              type="submit"
              value="Subscribe"
            >
              <p>{this.state.buttonText}</p>
            </button>
          </form>
        </div>
        <div className="underline">{/* <Underline></Underline> */}</div>
        {/* </section> */}
      </Router>
    );
  }
}

export default ImageHome;
