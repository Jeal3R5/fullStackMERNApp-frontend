import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Show({ people, updatePeople, deletePeople }) {
  const { id } = useParams();
  const person = people.find((person) => person._id === id);
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(person);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updatePeople(editForm, id);
    navigate("/");
  };

  const removePerson = () => {
    deletePeople(id);
    navigate("/");
  };

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  );
}
