import { useSelector } from "react-redux";
import style from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";
import { selectVisibleContact } from "../../redux/selectors";

export default function ContactList() {
  const listContact = useSelector(selectVisibleContact);

  return (
    <ul>
      {listContact.map((user) => (
        <li key={user.id} className={style.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
