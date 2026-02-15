import React from "react";
import { useState } from "react";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

export default function ContactIndex() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      isFavourite: true,
      phone: "+1-555-0101",
      email: "alice.johnson@example.com",
    },
    {
      id: 2,
      name: "Brian Smith",
      isFavourite: false,
      phone: "+1-555-0102",
      email: "brian.smith@example.com",
    },
    {
      id: 3,
      name: "Carla Gomez",
      isFavourite: true,
      phone: "+1-555-0103",
      email: "carla.gomez@example.com",
    },
  ]);

  function toggleFavourite(tempContact) {
    setContacts((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === tempContact.id) {
          return { ...obj, isFavourite: !obj.isFavourite };
        }
        return obj;
      });
    });
  }

  function deleteContact(contactId) {
    setContacts((prevState) => {
      return prevState.filter((obj) => {
        if (obj.id !== contactId) {
          return true;
        }
        return false;
      });
    });
  }

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-6"><AddContact /></div>
        <div className="col-6">Remove Contact</div>
      </div>
      <div className="row py-2">
        <div className="col-12">Form to add contacts</div>
        <div className="col-12">
          <FavouriteContacts
            favClick={toggleFavourite}
            delContact={deleteContact}
            list={contacts.filter((u) => u.isFavourite == true)}
          />
        </div>
        <div className="col-12">
          <GeneralContacts
            favClick={toggleFavourite}
            delContact={deleteContact}
            list={contacts.filter((u) => u.isFavourite == false)}
          />
        </div>
      </div>
    </div>
  );
}
