import React from 'react'

function Experience_card(props) {
  return (
    <div className="card bs bg__cardcolor">
    <h3>
    { props.title}
      <img
        src={props.imageURL}
        alt=""
        width="25px"
        height="25px"
      />
    </h3>
    <p className="text-primary">{props.date}</p>
    <p>
    {  props.details}
    </p>
  </div>
  )
}

export default Experience_card