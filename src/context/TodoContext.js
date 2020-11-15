import React, {useReducer, createContext } from 'react'

const TodoContext = createContext()

export function TodoProvider({reducer, state, children}) {
	return (
		<TodoContext.Provider value={useReducer(reducer, state)}>
			{{...children}}
		</TodoContext.Provider>
	)
}

export default TodoContext