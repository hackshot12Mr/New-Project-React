import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addGame} from "../redux/actions";
import StarRating from "./StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AddGame = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    prix: "",
    image: "",
    rating: 1,
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleRate = (rate) => setForm({ ...form, rating: rate });
  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>
        Add movie
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newGame = {
              ...form,
              id: Math.random(),
            };
            dispatch(addGame(newGame));
            closeModal();
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
          
          />
          <label> Date of release </label>
          <input
            type="date"
            value={form.prix}
            name="date"
            onChange={handleChange}
            
          />
          <label> Rating </label>
          <StarRating rate={form.rating} handleRating={handleRate} />

          <label>Image</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}
            
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddGame;
