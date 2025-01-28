import React from "react";
import "./card.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const CardFooter = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
