import { notificationsAPI } from "./notification.service";

export const TodoAPI = {
  getAll: async () => {
    const data = fetch(`http://localhost:3005/todo/`);
    return (await data).json();
  },
  createItem: async() => {
    const input = document.getElementById("create-item-value") as HTMLInputElement;
    if (input.value.length < 5) {
      return notificationsAPI.showInvalidInputNotification;
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input.value),
    };
    const item = fetch("http://localhost:3005/todo/", requestOptions).then((res) => {
      return res.json();
    }).then((data) => {
      return data;
    });

    return (await item);
  },
  removeItem: async (item: any) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    const deleted = fetch("http://localhost:3005/todo/", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    
    return (await deleted);
  }
};
