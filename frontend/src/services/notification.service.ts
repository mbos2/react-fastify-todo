export const notificationsAPI = {
  showInvalidInputNotification: () => {
    const notification = document.getElementById("invalid-input-notification") as HTMLDivElement;
    return (notification.style.display = "block");
  }
} 