import React from "react";
import Contact from "./Contact";

export default function GeneralContacts(props) {
  return (
    <div
      className="col-12 mt-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">General</div>
      <div className="p2">
        {props.list.map((tempContact, Index) => (
          <Contact
            favClick={props.favClick}
            delContact={props.delContact}
            tempContact={tempContact}
            key={Index}
          ></Contact>
        ))}
      </div>
    </div>
  );
}
