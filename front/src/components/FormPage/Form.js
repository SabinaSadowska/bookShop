import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { selectAllOrder } from "../../modules/books/books.selector";

class Form extends Component {
  state = {
    name: "",
    lastName: "",
    code: "",
    city: "",
  };

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, lastName, code, city } = this.state;

    axios
      .post(`http://localhost:3001/api/order`, {
        order: this.props.order,
        first_name: name,
        last_name: lastName,
        city: city,
        zip_code: code,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { name, lastName, code, city } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
          placeholder="name"
        />
        <input
          placeholder="last name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.onChange}
        />
        <input
          placeholder="city code"
          type="text"
          name="code"
          value={code}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={this.onChange}
          placeholder="city"
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  order: selectAllOrder(state),
});

export default connect(mapStateToProps)(Form);
