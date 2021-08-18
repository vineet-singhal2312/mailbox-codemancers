import React, { useEffect } from "react";
import "./MailBox.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import Header from "../../components/header/Header.jsx";
import MailBody from "../../components/mailBody/MailBody.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import SideNav from "../../components/sideNav/SideNav.jsx";
import { fetchMails } from "../../features/mail/MailSlice.js";
const MailBox = () => {
  const { category } = useParams();

  const mail = useSelector((state) => state.mail);

  const dispatch = useDispatch();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("search");
  const searchedMailList = mail.mails.filter((mail) =>
    mail.subject.includes(searchQuery)
  );
  const filteredMailList = mail.mails.filter((mail) => mail.tag === category);

  let mailsArr = category ? filteredMailList : mail.mails;
  if (searchQuery) {
    mailsArr = searchedMailList;
  }

  useEffect(() => {
    if (mail.status === "idle") {
      dispatch(fetchMails());
    }
  }, [dispatch, mail.status]);

  return (
    <div>
      <Header />
      <Container fluid className="mt-2">
        <div className="row d-flex justify-content-center  main-container">
          <div className="col-md-2">
            <SideNav />
          </div>
          <div className="col-md-4">
            <MailList list={mailsArr} />
          </div>
          <div className="col-md-5">
            <MailBody />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MailBox;
