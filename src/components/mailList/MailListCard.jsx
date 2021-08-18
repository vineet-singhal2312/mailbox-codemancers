import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
const MailListCard = ({ mail }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const setQuery = () => {
    const currURLParams = new URLSearchParams(location.search);
    currURLParams.set("id", mail.id);
    navigate(`?${currURLParams}`);
  };

  return (
    <div
      className="card-body mail-list-card-body text-start rounded-3"
      onClick={() => setQuery()}
    >
      <div className="mail-list-card-title d-flex align-items-center">
        <img
          className="mail-list-img"
          alt="mail-list-img"
          src="https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=194&h=156"
        />{" "}
        <h5 className="ps-4">{mail?.subject}</h5>
      </div>
      <p className="mail-list-card-text">{mail?.body}</p>
    </div>
  );
};

export default MailListCard;
