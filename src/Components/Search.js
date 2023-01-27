import { useDispatch, useSelector } from "react-redux";
import { filterRating, login } from "../redux/actions";
import StarRating from "./StarRating";



const Search = () => {
  const {  searchRating } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleRating = (rate) => dispatch(filterRating(rate));
  return (
    <div >
   
      <StarRating rate={searchRating} handleRating={handleRating} />

    </div>
  );
};

export default Search;
