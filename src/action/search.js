import axios from 'axios';

export const searchUser = (value) => {
  console.log("user clicked" + value.target.value);
  return { type: "SEARCH", payload: value.target.value };
}

export const addUserToFav = (value) => {
  console.log("user want to add to fav key :" + value);
  return { type: "ADD_FAV", payload: value };
}

export const fetchFood = (searchText) => {
  
return (dispatch) => {
  dispatch({type: "FETCHING_FOOD_STARTS"})
  if(searchText === undefined)
		searchText = "";
	else
	searchText = "&q="+searchText;

	const request = axios.get('https://api.nal.usda.gov/ndb/search/?format=json'+ searchText +'&sort=n&max=200&offset=0&api_key=o6bEsX0ZkBdHF76ZeNWDmR3umLJNjCK06cUJ0eBC')
  
  request.then((response) => {
    if(response.data.errors){
      dispatch({
        type: "FETCHING_FOOD_ERROR", payload: {}
     })}
      else
        {
      dispatch({
        type: "FETCHING_FOOD_DONE", payload: response.data.list.item
    })}
    
    
  }).catch((error)=>{
    dispatch({
        type: "FETCHING_FOOD_ERROR", payload: error
    })
  })
  }
}
export const fetchFoodDetails  = (id) => {
  
return (dispatch) => {
  dispatch({type: "FETCHING_FOODDETAILS_STARTS"})
  if(id === undefined)
	{
    dispatch({
        type: "FETCHING_FOODDETAILS_ERROR", payload: {}
     })
  }
	else
{
	const request = axios.get('https://api.nal.usda.gov/ndb/reports/?ndbno='+ id +'&type=b&format=json&api_key=o6bEsX0ZkBdHF76ZeNWDmR3umLJNjCK06cUJ0eBC')
  
  request.then((response) => {
    if(response.data.errors){
      dispatch({
        type: "FETCHING_FOODDETAILS_ERROR", payload: {}
     })}
      else
        {
      dispatch({
        type: "FETCHING_FOODDETAILS_DONE", payload: response.data.report.food
    })}
  }).catch((error)=>{
    dispatch({
        type: "FETCHING_FOODDETAILS_ERROR", payload: error
    })
  })
}
  }
}