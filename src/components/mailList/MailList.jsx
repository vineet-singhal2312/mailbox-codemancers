import React from "react";
import { useSelector } from "react-redux";

import MailListCard from "./MailListCard";
import "./MailList.css";

const MailList = ({ list }) => {
  const mail = useSelector((state) => state.mail);

  return (
    <div className="mail-list rounded-3 p-4">
      {list.length > 0 ? (
        list.map((mail) => <MailListCard key={mail.id} mail={mail} />)
      ) : mail.status === "loading" ? (
        <div>loading...</div>
      ) : (
        <div class="alert alert-danger" role="alert">
          No results found
        </div>
      )}
    </div>
  );
};

export default MailList;
