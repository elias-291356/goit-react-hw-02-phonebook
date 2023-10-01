export function Filter({ onChange }) {
  return (

    <form className="ListContactsForm"  >
      <div className="ListContactsForm">
        <h2 className="subtitle is-1">Contacts</h2>
        <label className="label">Find contact by name</label>
        <input
          onChange={onChange}
          className="input is-success"
          type="text"
          name="filter"
          required
        />

      </div>


    </form>
  )
}