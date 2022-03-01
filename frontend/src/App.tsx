import React from "react";
import './App.css';
import TodoList from './components/todo/List';
import Create from "./components/todo/Create";
import {InvalidInputNotification} from './components/notifications/InvalidInputNotification';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>VERY BASIC TO-DO LIST</h1>
        <p style={{textAlign: 'center'}}>React - REST API (Fastify) - AWS DynamoDB</p>
        {/* <List /> */}
        <InvalidInputNotification />
        <TodoList />
      </div>
    );
  }
}
