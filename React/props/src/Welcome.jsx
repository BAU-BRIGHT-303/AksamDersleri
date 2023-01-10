import React from "react";

function Welcome(props) {
  return (
    <div>
      <h3>Hoşgeldiniz {props.name}</h3>
      <hr />
      <h2>Bilgileriniz</h2>
      <h4>Adınız: {props.name}</h4>
      <h4>Soyadınız: {props.lastname}</h4>
      <h4>Mesleğiniz: {props.job}</h4>
      <h4>Memleket: {props.hometown}</h4>
    </div>
  );
}

export default Welcome;
