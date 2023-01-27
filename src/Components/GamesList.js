import React from "react";
import { useSelector } from "react-redux";
import GamesCard from "./GamesCard";
import Search from "./Search";
import AddGames from "./AddGames";

const GamesList = ({game}) => {
  const gameList = useSelector((state) => state.games);
  const { isAdmin, searchValue, searchRating } = useSelector((state) => state);
  return (
    <div>
      <Search />
      <div className="movie-list">
        {gameList
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              el.rating >= searchRating
          )
          .map((game, index) => (
            <GamesCard game={game} key={index} />
          ))}
          
      </div>
      {isAdmin ? <AddGames /> : null}
    </div>
  );
};

export default GamesList;
