import React from 'react'
import './App.css';
import TodoList from './components/TodoList';
import {TodoProvider} from './context/TodoContext'
import {initialState, reducer} from './reducer/TodoReducer'

function App() {
	return (
		<TodoProvider reducer={reducer} state={initialState}>
			<div className="App container">
				<TodoList/>
			</div>
		</TodoProvider>
	);
}

export default App;
