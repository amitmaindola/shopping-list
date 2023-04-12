import React from 'react'

function ItemList(props) {
  if(props.itemList.length==0)
    return <div>No items found!</div>
  else return (
    <div>
        {props.itemList.map((item)=>{
          return <div className='item'>
                  <p>{item.text}</p>
                  <p onClick={()=>{props.removeItem(item.id)}} className='closeBtn'>x</p>
                </div>
        })}
    </div>
  )
}

export default ItemList