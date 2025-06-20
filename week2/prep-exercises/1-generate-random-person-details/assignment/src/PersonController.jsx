import { useEffect, useState } from "react";
import PersonList from "./Person.jsx";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  const userData = {
    firstName: person.name.first,
    lastName: person.name.last,
    email: person.email,
    uuid: person.login.uuid,
  };

  return (
    <div>
      <PersonList {...userData} />
    </div>
  );
};

export default PersonController;