import React from "react";
import { useState, useEffect } from "react";

export default function AddContact(props) {
  const [message, setMessage] = useState({
    successMessage: "",
    errorMessage: "",
  });

  function handleAddContact(formData) {
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      let response = undefined;

if(props.isUpdating && props.selectedContact){
  //updating
  response = props.handleUpdateContact({
    id: props.selectedContact.id,
    isFavourite: props.selectedContact.isFavourite,
    ...contactData,
  })
}
else{
  //creating
  response = props.addContact(contactData);
}
      if (response.status == "success") {
        setMessage({ errorMessage: undefined, successMessage: response.msg });
      } else {
        setMessage({
          errorMessage: "Error Occured",
          successMessage: undefined,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

//Handler function to update form state on input change

  function handleFormInputChange(e){
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

//Use Effect hook to populate data on input fields during update

  useEffect(() => {
    if (props.isUpdating && props.selectedContact) {
      setForm({
        name: props.selectedContact.name,
        email: props.selectedContact.email,
        phone: props.selectedContact.phone,
      });
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [props.isUpdating, props.selectedContact]);


  return (
    <div className="border p-3">
      <form action={handleAddContact}>
        <div className="row p2">
          <div className="col-12 text_white-50 text-center h5">
            {props.isUpdating ? "Update Contact" : "Add Contact"}
          </div>
          <div className="col-12">
            <input name="name" value={form.name} onChange={handleFormInputChange} type="text" placeholder="Name.." />
          </div>
          <div className="col-12">
            <input name="email" value={form.email} onChange={handleFormInputChange} type="text" placeholder="Email.." />
          </div>
          <div className="col-12">
            <input name="phone" value={form.phone} onChange={handleFormInputChange} type="text" placeholder="Phone.." />
          </div>
          {message.successMessage && (
            <div className="text-success col-12">{message.successMessage}</div>
          )}
          {message.errorMessage && (
            <div className="text-danger col-12">{message.errorMessage}</div>
          )}
          <div className={`${props.isUpdating ? "col-6" : "col-12"}`}>
            <button className="btn btn-sm btn-primary form-control mt-2">
              {props.isUpdating ? "Update Contact" : "Add Contact"}
            </button>
          </div>
          {props.isUpdating && (
            <div className="col-6">
              <button
                type="button"
                onClick={props.cancelUpdate}
                className="btn btn-sm btn-danger form-control mt-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
