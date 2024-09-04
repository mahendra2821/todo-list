import {useState} from 'react' 
import Todoitems from '../Todoitems';
import './index.css'

const initialTodoList = [
    {
        id: 1,
        title: 'Book the ticket for today evening'
    },
    {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
      },
      {
        id: 6,
        title: 'Fix the production issue',
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
      },
    ]

const Searchtodos = () => {

        const [todoslist , setTodos] = useState(initialTodoList);

        const deleteTodo = (id) => {
        const updatedListdetails = todoslist.filter((eachItem) => (eachItem.id !== id));
        
        setTodos(updatedListdetails)
         
        };

     return (
        <div>
                <div className="app-container">
                    <div className='simple-todos-container'>
                        <h1 className='heading'>Simple Todos</h1>
                        {todoslist.length ? (
                            <ul className="todos-list">

                                {todoslist.map((eachTodo) => (
                                    <Todoitems 
                                    key = {eachTodo.id} 
                                    todoDetails = {eachTodo}
                                    deleteTodo = {deleteTodo} />
                                ))}
                            </ul>
                        ) : ( <p>NO TODOS AVAILABLE</p>

                        )}
                        </div>
                </div>
        </div>
     )
}

export default Searchtodos