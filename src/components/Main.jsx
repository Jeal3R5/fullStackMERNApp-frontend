import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [people, setPeople] = useState(null);

  const URL = "http://localhost:3001/people/";
  const getPeople = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setPeople(data);
  };
  const createPeople = async (person) => {
    //make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const updatePeople = async (person, id) => {
    await fetch(URL + id, {
      method: "Put",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const deletePeople = async (id) => {
    await fetch(URL + id, { method: "Delete" });
    getPeople();
  };




  useEffect(() => {
    getPeople();
  }, []);
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index people={people} createPeople={createPeople} />}
        />
        <Route
          path="/people/:id"
          element={
            <Show
              people={people}
              updatePeople={updatePeople}
              deletePeople={deletePeople}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
