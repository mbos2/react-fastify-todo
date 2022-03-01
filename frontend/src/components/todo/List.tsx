import React, { useEffect, useRef, useState } from "react";
import {TodoAPI} from '../../services/todo.service';
import Create from "./Create";
import DeleteItem from "./Delete";

export default function TodoList() {
  const [list, setList] = useState([]);
  const mounted = useRef(true);

    useEffect(() => {
      mounted.current = true;
      TodoAPI.getAll()
      .then((response) => {
        const sortedList = response.sort((a: any, b: any) => (a.dateCreated.S > b.dateCreated.S ? -1 : 1));
        if (mounted.current) {
          setList(sortedList);
        }
      })
      .then(() => {
        mounted.current = false;
      });
    }, []);

  return (
    <>
      <Create list={list} setList={setList} />
      <ul id="myUL">
        {list.map((item: any) => (
          <li key={item.index.N}>
            <DeleteItem item={item} list={list} setList={setList} />
            <span>{JSON.parse(item.item.S).value}</span>
          </li>
        ))}
      </ul>
    </>
  );
}