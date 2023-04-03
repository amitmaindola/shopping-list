import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [text, setText] = useState("")
  const [itemList, setItemList] = useState([]);
  const [newId, setNewId] = useState(0);

  const inputHandler = (e) => {
    setText(e.target.value);
  }

  const addItem = () => {
    if(text.length==0) return;
    setItemList([...itemList, {id: newId, text: text}]);
    setText("");
    setNewId(newId+1);
  }

  const removeItem = (id) => {
    setItemList(
        itemList.filter(
          item => item.id != id
        )
    )
  }


  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div style={{padding: 20, background: 'white', width: 400, margin: '60px auto 0', border: '1px dashed black'}}>
        <h2>Items To Buy</h2>
        <input onChange={inputHandler} type="text" value={`${text}`} placeholder='Add a new item' style={{padding: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, border: '2px solid #aaa', borderRight: 'none'}}/>
        <button onClick={addItem} style={{border: 'none', padding: '12px 20px', background: '#44f', color: '#fff', borderTopRightRadius: 10, borderBottomRightRadius: 10, cursor: 'pointer', marginBottom: 20}}>Add</button>
        
        <ItemList itemList={itemList} removeItem={removeItem}/>

      </div>
    </div>
  );
}

export default App;
