import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { getError, getLoading } from "../../redux/selectors";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.formWrapper}>
      <div className={style.container}>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading Contacts Book...</b>}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
