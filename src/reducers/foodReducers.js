var initials = {
        food: [],
        fav: [],
        details: {
					name:"",
                    ing:{desc:""},
                    nutrients:[],
					ndbno:"",
					type:"",
					sr:""
					
				},
        init: "",
        fetching: false,
        detailFetching: false,
        detailError: false,
        error: false
    }

export default function (state = initials, action, arr) {
    switch (action.type) {
        case 'FETCHING_FOOD_STARTS':
            return {
                ...state, fetching: true , init: action.payload , details : initials.details
            }
        case 'FETCHING_FOOD_DONE':
            return {
                ...state, food: action.payload, fetching: false , error: false
            }
        case 'FETCHING_FOOD_ERROR':
            return {
                ...state,food: [], error: true, fetching: false
            }
         case 'FETCHING_FOODDETAILS_STARTS':
            return {
                ...state, detailFetching: true
            }
        case 'FETCHING_FOODDETAILS_DONE':
            return {
                ...state, details: action.payload, detailFetching: false , detailError: false
            }
        case 'FETCHING_FOODDETAILS_ERROR':
            return {
                ...state, details: [], detailError: true, detailFetching: false
            }
        case 'ADD_FAV':
            {
                return { ...state, fav: immutablePush(state.fav, action.payload) }
            }
    }
    function immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }
    return state



}
