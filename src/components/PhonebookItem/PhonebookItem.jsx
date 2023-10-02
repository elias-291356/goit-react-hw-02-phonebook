export function PhonebookItem({ name, number, onInputChange, handleSubmit }) {
  return (
    <div>
      <h2 className="subtitle is-1">Phonebook</h2>
      <label className="label" >Name</label>
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
      <label className="label">Number</label>
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
      <button className="button is-primary" type="submit" onClick={handleSubmit}>Add contact</button>

    </div>
  )
}
