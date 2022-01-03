import react from 'react';
import { GiCrossMark } from 'react-icons/gi';

function TodosContainer(){
    return(
        <div className="todo-container">
            <p className="inp-btn">
                <input type="text" placeholder='write your todo here!' />
                <input type="button" value="add" />
            </p>
            <ul id="todos">
                <li>play minecraft <span id="cross"><GiCrossMark /></span></li>
                <li>learn django <span id="cross"><GiCrossMark /></span></li>
            </ul>
        </div>
    );
}


export default TodosContainer;
