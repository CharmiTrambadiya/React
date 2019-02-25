import React from "react";

const owl = {
  title: "Excellent Owl",
  src:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div className="owl">
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}
export default Owl;
