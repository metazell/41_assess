import React, { useState } from "react";

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData); // Pass the current state to the parent component
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="noun">Noun:</label>
        <input
          id="noun"
          name="noun"
          className="form-control"
          value={formData.noun}
          onChange={handleChange}
          placeholder="Enter a noun"
        />
      </div>
      <div className="form-group">
        <label htmlFor="noun2">Noun 2:</label>
        <input
          id="noun2"
          name="noun2"
          className="form-control"
          value={formData.noun2}
          onChange={handleChange}
          placeholder="Enter another noun"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adjective">Adjective:</label>
        <input
          id="adjective"
          name="adjective"
          className="form-control"
          value={formData.adjective}
          onChange={handleChange}
          placeholder="Enter an adjective"
        />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          name="color"
          className="form-control"
          value={formData.color}
          onChange={handleChange}
          placeholder="Enter a color"
        />
      </div>
      <button type="submit" className="btn btn-primary">Get Story</button>
    </form>
  );
}

export default MadlibForm;
