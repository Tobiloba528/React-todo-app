import React, { Component } from "react";
import "./home.css";
import { getToDo, saveItem } from "../services/fakeToDoService";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  state = {
    items: [],
    item: { todo: "", id: "" },
    searchQuery: ""
  };

  componentDidMount() {
    this.setState({ items: getToDo() });
  }

  filterItem = () => {
    const { items, searchQuery } = this.state;
    let filtered = [];
    if (searchQuery) {
      return (filtered = items.filter(item =>
        item.todo
          .toLocaleLowerCase()
          .startsWith(searchQuery.toLocaleLowerCase())
      ));
    } else {
      return (filtered = items);
    }
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items });
  };

  handleChange = ({ currentTarget: input }) => {
    const item = { ...this.state.item };
    item.todo = input.value;
    this.setState({ item });
  };

  handleSubmit = e => {
    e.preventDefault();
    
    if (this.state.item.todo){
      let item = {...this.state}
      this.state.items.push(this.state.item);
      // saveItem(this.state.item);
      console.log(this.state.items);
      this.props.history.push("/");
      toast.success(`Item: "${this.state.item.todo}" added succesfully!!`)
    }
    else{
      toast.error("Input your item")
    }
  };

  render() {

    let allItems = this.filterItem();
    const itemsLength = length => {
      if (length === 0)
        return (
          <div id="list">
            <h2>You've got nothing planned today. Kindly Add to-do below</h2>
          </div>
        );

      return (
        <div id="list">
          <h3 style={{ padding: "30px 0" }}>
            <strong>Activities for today...</strong>
          </h3>
          <ul style={{ padding: "0" }}>
            {allItems.map(item => (
              <li key={item.id}>
                {item.todo}{" "}
                <button
                  onClick={() => this.handleDelete(item.id)}
                  style={{ float: "right" }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };


    return (
      <div id="home">
        <div id="header" className="text-center">
          <h3>My To-do App</h3>
          <input
            type="text"
            placeholder="Search to-do"
            value={this.state.searchQuery}
            onChange={e => this.handleSearch(e.currentTarget.value)}
          />
        </div>
        <div>{itemsLength(this.state.items.length)}</div>

        <form className="text-center bg-secondary" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add to your to-do list"
            value={this.state.item.todo}
            name="todo"
            onChange={this.handleChange}
          />
          <button
            style={{ display: "block", margin: "10px auto 0" }}
            className="btn btn-primary"
          >
            Add to-do
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
