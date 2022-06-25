import { useEffect, useState } from "react";

export function PeopleList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    const controller = new AbortController();
    fetch("https://swapi.dev/api/people", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Personnages Star Wars</h1>
      {data === null ? (
        <p>Chargement...</p>
      ) : (
        <div>
          {data.results.map((personnage) => (
            <div key={personnage.url}>{personnage.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
