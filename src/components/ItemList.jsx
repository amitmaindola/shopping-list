import React from 'react'

function ItemList(props) {
  if(props.itemList.length==0)
    return <div>No items found!</div>
  else return (
    <div>
        {props.itemList.map((item)=>{
          return <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0 auto', alignItems: 'center', fontSize: '20px'}}>
                  <p>{item.text}</p>
                  <p onClick={()=>{props.removeItem(item.id)}} style={{color: 'red', fontWeight: 700, cursor: 'pointer'}}>x</p>
                </div>
        })}
    </div>
  )
}

export default ItemList