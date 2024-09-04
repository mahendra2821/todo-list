import './index.css'

const Todoitems = ({todoDetails, deleteTodo}) => {

    const {id ,title } = todoDetails 

    const ondeleteTodo = () => {
        deleteTodo(id)
    }

    return (
        <div>
                <li className="todo-item" >
                <div className='list-ccontainer'>
              <p className="title">{title}</p>
                    <div className='button2'>
                    <button type="button" className="button" onClick={ondeleteTodo}>Delete</button>
                    </div>
                    </div>

</li>
        </div>
    

    )
}
export default Todoitems