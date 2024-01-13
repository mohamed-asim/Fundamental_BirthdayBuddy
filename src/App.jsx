import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [userData, setUserData] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>No of Birthdays :{userData.length}</h3>
        <List userData={userData}></List>
        <button
          type="button"
          onClick={() => setUserData([])}
          className="btn btn-block"
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
