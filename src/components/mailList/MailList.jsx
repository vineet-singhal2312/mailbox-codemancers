import React from "react";
import MailListCard from "./MailListCard";
import "./MailList.css";

const MailList = ({ list }) => {
  return (
    <div className="mail-list rounded-3 p-4">
      {list.length > 0 ? (
        list.map((mail) => <MailListCard key={mail.id} mail={mail} />)
      ) : (
        <div class="alert alert-danger" role="alert">
          No results found
        </div>
      )}
    </div>
  );
};

export default MailList;
