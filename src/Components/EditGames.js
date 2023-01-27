import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editGame } from "../redux/actions";
// import { addMovie } from "../redux/actions";
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

const AddGame = ({ oldGame }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: oldGame.id,
    name: oldGame.name,
    prix: oldGame.prix,
    image: oldGame.image,
    rating: oldGame.rating,
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
      <button className="btn btn-primary" onClick={openModal}>
        Edit
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
            dispatch(editGame(form));
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
            type="text"
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
              Edit
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
