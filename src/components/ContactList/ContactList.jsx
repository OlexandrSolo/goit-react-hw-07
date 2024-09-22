import { useSelector } from "react-redux";
import style from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";
import { selectContacts, selectFilter } from "../../redux/selectors";

const getFilteredList = (contactList, filter) => {
  return contactList.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contactList = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const list = getFilteredList(contactList, filterName);

  return (
    <ul>
      {list.map((user) => (
        <li key={user.id} className={style.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
