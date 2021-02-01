export function getUserIdFromURL() {
  const pathArray = window.location.pathname.split("/");
  if (pathArray.length === 3 && pathArray[1] === "users") {
    return pathArray[2];
  }
  return undefined;
}
