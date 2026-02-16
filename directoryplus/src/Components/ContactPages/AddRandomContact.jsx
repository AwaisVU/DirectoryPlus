import React from "react";
import addRandomUser from "../../utility/api";

export default function AddRandomContact(props) {
  const getRandomUser = async () => {
    const response = await addRandomUser();
    if (response && response.results && response.results.length > 0) {
      const user = response.results[0];
      const formattedUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      };
      props.addRandomContact(formattedUser);
    }
  };

  return (
    <button onClick={getRandomUser} className="btn btn-success form-control">
      Add Random Contact
    </button>
  );
}
