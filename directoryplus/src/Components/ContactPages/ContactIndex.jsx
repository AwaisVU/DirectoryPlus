import React from "react";
import { useState, useEffect } from "react";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";

export default function ContactIndex(props) {
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

  //Two states for update functionality

  const [selectedContact, setSelectedContact] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  //State hook to be used in conjustion with useEffect for update functionality
  /*   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
 */

  //Update Click Management Function

  function handleUpdateClick(tempContact) {
    setSelectedContact(tempContact);
    setIsUpdating(true);
  }

  function handleCancelUpdate(tempContact) {
    setSelectedContact(tempContact);
    setIsUpdating(false);
  }

  //Actual Update Function

  function handleUpdateContact(tempContact) {
    setContacts((prevState) => {
      return prevState.map((obj) => {
        if (obj.id == tempContact.id) {
          return {
            ...obj,
            name: tempContact.name,
            email: tempContact.email,
            phone: tempContact.phone,
          };
        }
        return obj;
      });
    });
    setSelectedContact(null);
    setIsUpdating(false);
    return { status: "success", msg: "Contact successfully updated" };
  }

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

  function removeAll() {
    setContacts([]);
  }


  ///API related function to add random contact


  function addRandomContact(newContact) {
    //validation of form

    const newFinalContact = {
      ...newContact,
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
      isFavourite: false,
    };
    setContacts((prevState) => {
      return prevState.concat([newFinalContact]);
    });

    return { status: "success", msg: "Contact successfully added" };
  }


  ///API ends here




  function addContact(newContact) {
    //validation of form

    const duplicateRecord = contacts.filter((x) => {
      if (
        x.name == newContact.name ||
        x.email == newContact.email ||
        x.phone == newContact.phone
      ) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "Error", msg: "It's a Duplicate Record" };
    }

    const newFinalContact = {
      ...newContact,
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
      isFavourite: false,
    };
    setContacts((prevState) => {
      return prevState.concat([newFinalContact]);
    });

    return { status: "success", msg: "Contact successfully added" };
  }

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-6"><AddRandomContact addRandomContact={addRandomContact} /></div>
        <div className="col-6">
          <button onClick={removeAll} className="btn btn-danger">
            Remove All
          </button>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-12">
          <AddContact
            addContact={addContact}
            isUpdating={isUpdating}
            selectedContact={selectedContact}
            cancelUpdate={handleCancelUpdate}
            handleUpdateContact={handleUpdateContact}
          />
        </div>
        <div className="col-12">
          <FavouriteContacts
            cancelUpdate={handleCancelUpdate}
            updateContact={handleUpdateClick}
            favClick={toggleFavourite}
            delContact={deleteContact}
            list={contacts.filter((u) => u.isFavourite == true)}
          />
        </div>
        <br />
        <div className="col-12">
          <GeneralContacts
            cancelUpdate={handleCancelUpdate}
            updateContact={handleUpdateClick}
            favClick={toggleFavourite}
            delContact={deleteContact}
            list={contacts.filter((u) => u.isFavourite == false)}
          />
        </div>
      </div>
    </div>
  );
}
