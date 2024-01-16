import React from 'react'

const RenderInput = ({ label, name, type, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    {type === "file" ? (
      <input
        type={type}
        className="form-control"
        name={name}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        className="form-control"
        placeholder={label.toLowerCase()}
        name={name}
        onChange={onChange}
      />
    )}
  </div>
);

export default RenderInput;