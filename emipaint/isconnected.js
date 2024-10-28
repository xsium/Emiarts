export function isConnected() {
  const isConnected = localStorage.getItem("connected") === "true";
  if (isConnected) {
    console.log("User is already connected.");
  }
}
isConnected();
