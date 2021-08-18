import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setMail } from "../../features/mail/MailSlice";
import "./MailBody.css";
import MailCard from "./MailCard";
function MailBody() {
  const { mails, mail } = useSelector((state) => state.mail);
  const dispatch = useDispatch();
  const location = useLocation();

  const idByQuery = new URLSearchParams(location.search).get("id");

  const selectedMail = mails.find((mail) => mail.id === JSON.parse(idByQuery));

  useEffect(() => {
    if (idByQuery) {
      dispatch(setMail(selectedMail));
    }
  }, [idByQuery, selectedMail, dispatch]);

  return (
    <div className="mail-body rounded-3 p-4">
      {!!Object.keys(mail).length ? (
        <MailCard mail={mail} />
      ) : (
        <div class="alert alert-success" role="alert">
          Select any mail
        </div>
      )}
    </div>
  );
}

export default MailBody;
