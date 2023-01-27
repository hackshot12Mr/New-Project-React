import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { deleteGame } from "../redux/actions";
import StarRating from "./StarRating";
import EditMovie from "./EditGames";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const GamesCard = ({game}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteGame(game.id));
  return (
    <div >
       <div >
         <div >
           <Card style={{ width: '18rem' }} >
                 <Card.Img variant="top" src={game.pic} className="card-img-top"/>
                 <Card.Body>
            <Card.Title >{game.name}</Card.Title>
            <StarRating className='start' rate={game.rating} />
            <Card.Text >{game.prix}</Card.Text>
            <Link to={`/info/${game.id}`}><Button type="submit">info</Button></Link>
            
            <Button type="submit">Buy Now</Button>
                 </Card.Body>
                 {location.pathname === "/admin" ? (
            <div>
              <Button className="btn btn-primary" onClick={handleDelete}>
                Delete
              </Button>
              <EditMovie oldGame={game} />
            </div>
                 ) : null}
               </Card>
         </div>
       </div>
      
    </div>
  );
};

export default GamesCard;
