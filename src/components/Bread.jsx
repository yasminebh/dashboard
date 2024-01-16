import React from 'react'

const Bread = (props) => {

  const {name} = props
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="./">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </div>
    </>
  );
}

export default Bread