import { useSelector } from "react-redux";
import style from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { getContacts } from "../../redux/selectors";
// import { useMemo } from "react";

const getFilteredList = (contactList, filter) => {
  return contactList.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const contactList = useSelector(getContacts);
  const filterName = useSelector(selectNameFilter);
  // const listContact = useMemo(
  //   () => getFilteredList(contactList, filterName),
  //   [contactList, filterName]
  // );
  const list = getFilteredList(contactList, filterName);

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
