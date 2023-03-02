import React from "react";
import "../Card.css";

const Card = () => {
const cardsData = [
  {
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    heading: "Tony Soap",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Nadila Adja",
    Image: <img src={require("../images/1.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Samantha WIlliam",
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Karen Hope",
    Image: <img src={require("../images/1.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Jordan Nico",
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },{
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    heading: "Tony Soap",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Nadila Adja",
    Image: <img src={require("../images/1.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Samantha WIlliam",
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Karen Hope",
    Image: <img src={require("../images/1.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
  {
    heading: "Jordan Nico",
    Image: <img src={require("../images/3.jpg")} alt=" " />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates ipsa debitis nesciunt repudiandae tempora laboriosam temporibus perspiciatis odio omnis.",
  },
];
  return (
    <>
     
        <div className="scroll-card">
        {cardsData.map((card, i) => (
          <div key={i} >
            <div className="content-box">
              <div className="square-img">
                   {card.Image}
              </div>
              <div>
                <h5 className="card-h6">{card.heading}</h5>
                <p className="description">{card.description}</p>
              </div>
            </div>
          </div>
          ))}
          <div>&nbsp;</div>
        </div>
    </>
  );
};

export default Card;
