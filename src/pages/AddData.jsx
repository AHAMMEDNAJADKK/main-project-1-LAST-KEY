export default function AddData() {
  return (
    <div className="page-container">
      <h2>Add Document to Vault</h2>

      <form>
        <input type="text" placeholder="Document Name" required />
        <input type="file" required />
        <button>Add Document</button>
      </form>
    </div>
  );
}
