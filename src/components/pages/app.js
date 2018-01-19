import React, { Component } from 'react'
import AddTodo from '../../containers/AddTodo'
import TodoList from '../../containers/TodoList'
import Header from '../layouts/header'

class app extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <AddTodo />
          <TodoList />
      </div>
    );
  }
}

export default app;
