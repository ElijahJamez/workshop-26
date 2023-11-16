


export default function ContactRow({ contact }) {               //Set up to take a contact object - will render a separate ContactRow component for each contact in the ContactList
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}