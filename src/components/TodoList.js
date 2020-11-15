import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'
import { ACTION_TYPES } from '../reducer/TodoReducer'

function TodoList() {
	const [state, dispatch] = useContext(TodoContext)
	const [task,setTask] = useState("")
	const handleSubmit = (e)=>{
		e.preventDefault()
		dispatch({
			type: ACTION_TYPES.ADD_TODO,
			payload: task
		})
		setTask("")
	}
	return (
		<div className="row">
			<div className="col s6 offset-s3">
				<ul className="collection">
					{state.list.map(l => (
						<li className="collection-item" key={l.id}>
							<label>
								<input type="checkbox" checked={l.complete?"checked":""} onChange={(e)=>{dispatch({
									type: ACTION_TYPES.TOGGLE_COMPLETE,
									payload: l.id
								})}} className="filled-in"/>
								<span>{l.task}</span>
							</label>
							<button className="secondary-content btn" onClick={()=>{dispatch({
								type: ACTION_TYPES.REMOVE_TODO,
								payload: l.id
							})}}>x</button>
						</li>
					))}
				</ul>
				<form onSubmit={handleSubmit}>
					<div className="input-field">
						<input id="email" type="text" className="validate" placeholder="task" onChange={(e)=>{setTask(e.target.value)}} value={task}/>
					</div>
				</form>
			</div>

		</div>
	)
}

export default TodoList
