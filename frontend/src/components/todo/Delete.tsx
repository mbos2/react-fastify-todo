import { TodoAPI } from "../../services/todo.service";

export default function DeleteItem(props: any) {
  const removeItem = async () => {
    console.log(props.item)
    const promise = TodoAPI.removeItem(props.item);
    promise.then((data) => {
      props.setList([...props.list].filter((item: any) => item.index.N !== data.Key.index.N));
    });
  };
  return (
    <span className="action">
      <button className="delete" onClick={removeItem}>Delete</button>
    </span>
  );
}
