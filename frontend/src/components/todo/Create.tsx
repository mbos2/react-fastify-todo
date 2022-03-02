import { TodoAPI } from "../../services/todo.service";
import { useState } from "react";

export default function Create(props: any) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [spanVisible, setSpanVisible] = useState('block');
  const input = document.getElementById("create-item-value") as HTMLInputElement;
  const inputMinimumCharacters = 10;

  const insertItem = async () => {
    const promise = TodoAPI.createItem();
    promise
    .then((data) => {
      if (data !== undefined || data != null) {
        props.setList([...props.list, data.Item].sort((a: any, b: any) => (a.dateCreated.S > b.dateCreated.S ? -1 : 1)));
      }
    })
    .then(() => {
      input.value = '';
      setButtonDisabled(true);
      setSpanVisible("block");
    })
  }

  const validate = () => {
    if (input.value.length >= inputMinimumCharacters) {
      setButtonDisabled(false);
      setSpanVisible("none");
    } else {
      setButtonDisabled(true);
      setSpanVisible("block");
    }
  }

  return (
    <div className="form">
      <label htmlFor="create">
        <input
          type="text"
          name="create"
          id="create-item-value"
          minLength={inputMinimumCharacters}
          onChange={validate}
        />
        <button disabled={buttonDisabled} id="create-button" onClick={insertItem}>
          Create
        </button>
      </label>
      <p style={{ textAlign: "center", color: "orange", display: spanVisible }}>
        Input must have minimum {inputMinimumCharacters} characters
      </p>
    </div>
  );
}
