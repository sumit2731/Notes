import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

    const [counter,setCounter] = useState(0);

    const updateCounter = () => {
        console.log("Updating Counter");
        setCounter(prevCounter => ++prevCounter);
    }
    

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <h2>{counter}</h2>
                    <button onClick={updateCounter}>UpdateCounter</button>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;