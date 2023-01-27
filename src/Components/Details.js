import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Details = () => {
  const game = useSelector((state) => state.games);
  
  const {id} = useParams()
  console.log(id);
    const item = game.find(game=>game.id==id)
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.pic} alt="" />
      <h3>{`the ${item.name} cost ${item.prix}`}</h3>
    </div>
  )
}

export default Details