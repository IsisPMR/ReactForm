import React from "react";
export default function Formulario(props) {
  return (
    <form>
        <div className="input-container">
            <input type="text" value={props.userName || ""} />
        </div>
        <div className="input-container">
            <input type="password" value={props.password || ""} />
        </div>
        <div>
            <button type="submit">Submbit</button>
        </div>
    </form>
  );
}