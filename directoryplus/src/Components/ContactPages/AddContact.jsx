import React from "react";

export default function AddContact() {
  function handleAddContact(e) {
    e.preventDefault();
  }

  return (
    <div className="border p-3">
      <form onSubmit={handleAddContact}>
        <div className="row p2">
          <div className="col-12 text_white-50 text-center h5">Add Contact</div>
          <div className="col-12">
            <input name="name" type="text" placeholder="Name.." />
          </div>
          <div className="col-12">
            <input name="email" type="text" placeholder="Email.." />
          </div>
          <div className="col-12">
            <input name="phone" type="text" placeholder="Phone.." />
          </div>
          <div className="text-success col-12">Success</div>
          <div className="text-danger col-12">Failed</div>
          <button
            type="submit"
            className="btn btn-sm btn-primary form-control p5"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}
