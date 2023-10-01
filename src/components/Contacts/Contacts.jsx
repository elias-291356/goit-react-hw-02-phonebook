

export function Contacts({ contacts, onDeleteContact }) {

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className="added-contact">
          <p className="subtitle is-5 added-contact-item"> {contact.name} {contact.number}</p>
          <button onClick={() => onDeleteContact(contact.id)} type="button" className="button is-danger is-light">Delete</button>
        </li>
      ))}
    </ul>

  )
}