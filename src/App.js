import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const MENU = [
  {
    name: "coffee",
    value: 480,
    id: "coffee"
  },
  {
    name: "tea",
    value: 280,
    id: "tea"
  },
  {
    name: "milk",
    value: 180,
    id: "milk"
  },
  {
    name: "coke",
    value: 190,
    id: "coke"
  },
  {
    name: "beer",
    value: 580,
    id: "beer"
  }
]
function App() {
  const [counters, setCounters] = useState(() => {
    const counter = {};
    MENU.map((item) => {
      counter[item.name] = 0;
    });
    return counter;
  });

  const [order, setOrder] = useState({count: 0, price: 0})

  const addCount = (item) => {
    const temp = {...counters};
    temp[item.name] = temp[item.name] + 1;
    const temp2 = {...order};
    temp2.count += 1;
    temp2.price += item.value;
    setCounters(temp);
    setOrder(temp2);
  }
  return (
    <div className="App">
      <div className='menu'>
        {MENU.map((item) => <div className='menu-item'>
          <button id={item.id} onClick={() => addCount(item)}>{item.name} - {item.value}yen</button>
          <div id={`${item.name}-count`} >{counters[item.name]}</div>
        </div>)}
      </div>
      <div className='order'>
          <div> Total Items: <span id="count">{order.count}</span></div>
          <div id="total-price"> Total Price: <span id="price">{order.price}</span> yen</div>
      </div>
    </div>
  );
}

export default App;
