// tr = row
// td = column elements?

                                 
export default function ContactRow({ setSelectedContactId, contact }) {                                                     //Set up to take a contact object - will render a separate ContactRow component for each contact in the ContactList
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
