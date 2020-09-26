import React from "react";
const inlinestyle = {
  color: "pink",
  fontsize: "100px"
};
function Style(props) {
  const classname = props.primary ? "primary" : "Secndary";
  return (
    <div>
      <h1 className={`${classname} font-x`}>My style</h1>
      <h1 style={inlinestyle}>In Line style</h1>
    </div>
  );
}
export default Style;
