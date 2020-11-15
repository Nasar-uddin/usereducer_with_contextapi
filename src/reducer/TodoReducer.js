export const ACTION_TYPES = {
	ADD_TODO: 'add_todo',
	TOGGLE_COMPLETE: 'toggle_complete',
	REMOVE_TODO: 'remove_todo'
}

export const initialState = {
	list: [
		{id:1,task: 'Do some rook', complete: false},
		{id:2,task: 'Do some rool', complete: false},
		{id:3,task: 'Write some react ', complete: false}
	]
}

export function reducer(state, action){
	switch(action.type){
		case ACTION_TYPES.ADD_TODO:
			return addTodo(state, action.payload)
		case ACTION_TYPES.REMOVE_TODO:
			return removeTodo(state, action.payload)
		case ACTION_TYPES.TOGGLE_COMPLETE:
			return toggleTodo(state, action.payload)
		default:
			return state
	}
}

function addTodo(state, newTodo){
	let list = state.list
	const newOne = {id:list.length+1,task: newTodo, complete: false}
	return {...state, list: [...list, newOne]}
}
function removeTodo(state, id){
	let list = state.list
	let newList = list.filter((el)=>{
		return el.id !== id
	})
	return {...state, list: newList}
}
function toggleTodo(state, id){
	let newList = state.list.map(obj=> obj.id===id? {...obj, complete: !obj.complete} : obj)
	return {...state, list: [...newList]}
}
