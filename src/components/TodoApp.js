import React, { Component, useState, useEffect } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo"
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import Footer from "./store/containers/Footer";
// class TodoApp extends Component {
//   state = {
//     todos: [],
//   };

//   handleCheckboxChange = (id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       }),
//     });
//   };
//   deleteTodo = (id) => {
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then(response => this.setState({
//         todos:[
//           ...this.state.todos.filter(todo => {
//             return todo.id !== id;
//           })
//         ]
//       }))
//     this.setState({
//         todos:[
//             ...this.state.todos.filter(todo => {
//                 return todo.id !== id;
//             })
//         ]
//     })
//   };
//   addTodo = title => {
//       const newTodo = {
//           title: title,
//           completed: false
//       }
//       axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
//         .then(response => {
//           console.log(response);
//           this.setState({
//             todos: [...this.state.todos, response.data]
//           })
//         })
//   }
//   componentDidMount(){
//       const config = {
//           params: {
//               _limit: 10
//           }
//       }
//       axios.get("https://jsonplaceholder.typicode.com/todos", config).then(res => this.setState({todos: res.data}))
//   }
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <AddTodo addTodo={this.addTodo}/>
//         <Todos
//           todos={this.state.todos}
//           handleChange={this.handleCheckboxChange}
//           deleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }
function TodoApp(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const config = {
      params: {
          _limit: 10
      }
    }
    axios.get("https://jsonplaceholder.typicode.com/todos", config).then(res => setTodos(res.data));
  }, []);
  const handleCheckboxChange = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }
  
  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => setTodos(
        todos.filter(todo => {
          return todo.id !== id
        })
      ))
  }

  const addTodo = (title) => {
      const newTodo = {
          title: title,
          completed: false
      }
      axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then(response => {
          // setTodos(todos.push(response.data))
          setTodos([...todos, response.data])
        })
  }
  return(
      <div className="container">
        <Header />
        <AddTodo addTodo={addTodo}/>
        <Todos
          todos={todos}
          handleChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
        />
        <Footer/>
      </div>
  )
}
export default TodoApp;
