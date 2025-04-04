import React, {useState} from "react";
import "./Passengers.css";

export const Passengers = ({state, send}) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const goToTicket = () => {
    send("DONE");
  };

  const submit = (e) => {
    e.preventDefault();
    send("ADD", {newPassenger: value});
    setValue("");
  };

  const {passengers} = state.context;

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>
        Agrega a las personas que van a volar ✈️
      </p>
      {passengers.map((person, idx) => (
        <p className='text' key={`person-${idx}`}>
          {person}
        </p>
      ))}
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Escribe el nombre completo'
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button type='submit' className='Passengers-add button-secondary'>
          Agregar Pasajero
        </button>
        <button
          type='button'
          className='Passenger-pay button'
          onClick={goToTicket}>
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};
