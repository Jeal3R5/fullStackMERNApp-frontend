import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ people, createPeople }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    title: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createPeople(form);
    setForm({
      name: "",
      image: "",
      title: "",
    });
  };

  // loaded function
  const loaded = () =>
    people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <button type="submit">Add Person</button>
      </form>
      {people ? loaded() : loading()}
    </section>
  );
}
