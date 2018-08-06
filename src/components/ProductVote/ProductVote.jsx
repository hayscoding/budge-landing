import React from "react";
import FancyButton from "../FancyButton/FancyButton"

import "./ProductVote.css";

class ProductVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
  	const { text } = this.props;

    return(
      <div className="product-vote">
        <h1 className="title">What do you want to do first?</h1>
        <form name="landing-page-emails" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      		{/*Hiddin inputs necessary for use with Netlify hosting to use free form function*/}
          <input type="hidden" name="form-name" value="landing-page-emails" />
          <input type="hidden" name="bot-field" />
          <label><input required type="radio" name="vote" value="0" /></label><FancyButton text="Rebuild Facebook From Scratch" /><br />
          <label><input required type="radio" name="vote" value="1" /></label><FancyButton text="Create a web app to help manage money" /><br />
          <label><input required type="radio" name="vote" value="2" /></label><FancyButton text="Build a Reddit bot" /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default ProductVote;
