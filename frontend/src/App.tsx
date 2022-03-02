import './App.css';
import TodoList from './components/todo/List';

export default function App() {
    return (
      <div className="wrapper">
        <h1>VERY BASIC TO-DO LIST</h1>
        <p style={{ textAlign: "center" }}>React - REST API (Fastify) - AWS DynamoDB</p>
        <TodoList />
      </div>
    );
}
