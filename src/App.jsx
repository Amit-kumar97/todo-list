import './App.css';
import React from 'react';
import Header from './Component/Header';
import TodoList from './Component/TodoList';
class App extends React.Component{
  render() {
    return <div><Header/><TodoList/></div>;
  }
}

export default App;
