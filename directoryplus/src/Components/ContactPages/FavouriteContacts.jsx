import React from "react";
import Contact from "./Contact";

export default function FavouriteContacts(props) {
  return (
    <div
      className="col-12 mt-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favourite</div>
      <div className="p2">
        {props.list.map((tempContact, Index) => (
          <Contact
            updateContact={props.updateContact}
            favClick={props.favClick}
            delContact={props.delContact}
            key={Index}
            tempContact={tempContact}
          ></Contact>
        ))}
      </div>
    </div>
  );
}
