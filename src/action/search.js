export const searchUser = (value) => {
  console.log("user clicked" + value.target.value);
  return { type: "SEARCH", payload: value.target.value };
}

export const addUserToFav = (value) => {
  console.log("user want to add to fav key :" + value.target.value);
  return { type: "ADD_FAV", payload: value.target.value };
}