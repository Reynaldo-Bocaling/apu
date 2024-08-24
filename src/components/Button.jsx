import React from "react";

const Button = ({ label, url }) => {
  return (
    <>
      <a href={url} class="button ">
        {label}
      </a>
    </>
  );
};

export default Button;
