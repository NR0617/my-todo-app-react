import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import TodoList from './pages/TodoList';
import InputPage from './pages/InputPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [checkedArr, setCheckedArr] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER}/api/todo`)
            .then((res) => res.json())
            .then((data) => setTodoList(data));
    }, []);

    return (
        <Router>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={<TodoList todoList={todoList} checkedArr={checkedArr} setCheckedArr={setCheckedArr} />}
                />
                <Route path="/input" element={<InputPage todoList={todoList} setTodoList={setTodoList} />} />
                <Route path="/input/:id" element={<InputPage todoList={todoList} setTodoList={setTodoList} />} />
            </Routes>
        </Router>
    );
}

export default App;
