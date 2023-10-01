export function PhonebookItem({ name, number, onInputChange }) {
  return (
    <li>
      <label label className="label" >Name</label>
      <input
        placeholder="Your name"
        className="input is-success"
        type="text"
        name="name"
        maxLength="20"
        required
        value={name}
        onChange={onInputChange}
      />
      <label label className="label">Number</label>
      <input
        placeholder="+380"
        className="input is-success"
        type="number"
        name="number"
        maxLength="20"
        required
        value={number}
        onChange={onInputChange}
      />
      <button className="button is-primary" type="submit">Add contact</button>
    </li>
  )
}
