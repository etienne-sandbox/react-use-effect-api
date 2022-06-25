import { useEffect, useState } from "react";

const PEOPLES = [
  { name: "Luke Skywalker", id: "1" },
  { name: "C-3PO", id: "2" },
  { name: "R2-D2", id: "3" },
  { name: "Darth Vader", id: "4" },
  { name: "Leia Organa", id: "5" },
  { name: "R5-D4", id: "8" },
  { name: "Obi-Wan Kenobi", id: "10" },
];

export function PeopleDetails() {
  const [peopleId, setPeopleId] = useState(PEOPLES[0].id);
  const [data, setData] = useState(null);

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    const controller = new AbortController();
    fetch(`https://swapi.dev/api/people/${peopleId}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
    return () => controller.abort();
  }, [peopleId]);

  return (
    <div>
      <h1>
        Informations sur{" "}
        <select
          value={peopleId}
          onChange={(event) => setPeopleId(event.currentTarget.value)}
        >
          {PEOPLES.map((people) => (
            <option key={people.id} value={people.id}>
              {people.name}
            </option>
          ))}
        </select>
      </h1>
      {data === null ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <p>
            Nom: <b>{data.name}</b>
          </p>
          <p>
            Genre: <b>{data.gender}</b>
          </p>
          <p>
            Année de naissance: <b>{data.birth_year}</b>
          </p>
          <p>
            Couleur des yeux: <b>{data.eye_color}</b>
          </p>
          <p>
            Poid: <b>{data.mass}kg</b>
          </p>
          <p>
            Taille: <b>{data.height}cm</b>
          </p>
        </div>
      )}
    </div>
  );
}
