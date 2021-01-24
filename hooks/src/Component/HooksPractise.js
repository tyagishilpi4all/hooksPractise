import React, { useState } from "react";

function HooksPractise() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <section className="container">
      <div className="col-6 mx-auto mt-5">
        <div className="form-group">
          <label>First name</label>
          <input
            className="form-control"
            type="text"
            values={name.firstName}
            onChange={(e) => setName({...name, firstName : e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input className="form-control" 
           type="text"
           values = {name.lastName}
           onChange = {e => setName({...name, lastName : e.target.value})}
          />
        </div>
        <div className="form-group">
          <p>First name :: {name.firstName} </p>
          <p>Last name :: {name.lastName} </p>
        </div>
      </div>
    </section>
  );
}

export default HooksPractise;
