import TodosItem from "./TodosItem"

const TodosList = (props) => {
    const todos = props.todos;
    return <ol>
        {todos.map(todo => <TodosItem isDone={todo.done} text={todo.text} key={Math.random()} />)}
    </ol>
}

export default TodosList