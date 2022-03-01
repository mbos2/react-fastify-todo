import { TodoAPI } from "../../services/todo.service";

export default function Create(props: any) {
  const insertItem = async () => {
    const promise = TodoAPI.createItem();
    promise
    .then((data) => {
      if (data !== undefined || data != null) {
        props.setList([...props.list, data.Item].sort((a: any, b: any) => (a.dateCreated.S > b.dateCreated.S ? -1 : 1)));
      }
    })
    .then(() => {
      const input = document.getElementById('create-item-value') as HTMLInputElement;
      input.value = '';
    })
  }

  return (
    <div className="form">
      <label htmlFor="create">
        <input type="text" name="create" id="create-item-value" minLength={5} />
        <button onClick={insertItem}>Create</button>
      </label>
    </div>
  );
}
