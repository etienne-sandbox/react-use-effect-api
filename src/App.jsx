import { useState } from "react";
import { PeopleDetails } from "./PeopleDetails";
import { PeopleList } from "./PeopleList";

export function App() {
  const [page, setPage] = useState("list"); // "list" ou "details"

  return (
    <div className="App">
      <header className="App-header">
        <button
          className={page === "list" ? "active" : ""}
          onClick={() => setPage("list")}
        >
          Liste
        </button>
        <button
          className={page === "details" ? "active" : ""}
          onClick={() => setPage("details")}
        >
          Détails
        </button>
      </header>
      <main>{page === "list" ? <PeopleList /> : <PeopleDetails />}</main>
    </div>
  );
}
