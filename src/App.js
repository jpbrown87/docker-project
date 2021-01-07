import "./App.css";
import React from "react";
import Book from "./components/Book";
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/books")
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }))
      .then(console.log(this.state))
  }

  render() {
    return (
      <div>
        <Book books={this.state.books}/>
      </div>
    );
  }
}

export default App;