import React from "react";

const MailCard = ({ mail }) => {
  return (
    <div className="card-body mail-card-body text-start d-flex flex-column justify-content-between rounded-3">
      <h5 className="mail-card-title">
        <img
          className="mail-img-user"
          alt="mail-img"
          src="https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=194&h=156"
        />{" "}
        {mail?.subject}
      </h5>
      <p className="mail-card-text p-4">{mail?.body}</p>
    </div>
  );
};

export default MailCard;
