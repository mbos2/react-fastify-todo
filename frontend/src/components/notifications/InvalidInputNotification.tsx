  function removeNotification() {
    const notification = document.getElementById('invalid-input-notification') as HTMLDivElement;
    return notification.style.display = 'none';
  }
  
  export function InvalidInputNotification() {
    return (
      <div id="invalid-input-notification" style={{display: 'none'}}>
        <h1>Invalid input</h1>
        <button onClick={removeNotification}>Remove</button>
      </div>
    );
  }