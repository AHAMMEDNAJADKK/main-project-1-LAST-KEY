export default function SelectNominee() {
  return (
    <div className="page-container">
      <h2>Add Nominee</h2>

      <form>
        <input type="text" placeholder="Nominee Name" required />
        <input type="email" placeholder="Nominee Email" required />
        <input type="text" placeholder="Relation" required />
        <button>Save Nominee</button>
      </form>
    </div>
  );
}
