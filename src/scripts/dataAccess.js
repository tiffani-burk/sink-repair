//add a mainContainer variable for the fetch broadcast the stateChange to 
const mainContainer = document.querySelector("#container")

//stores external data when fetched in here, start with empty array
const applicationState = {
    requests: [],
    plumbers: [],
    completions: []
}

//fetching the data from the api 
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

//create a function to return a copy of the data being fetched in fetchRequests and return it to the application state
export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}


//boilerplate code
//this code is asking the API to create something new
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    //dispatch custom event after the POST operation is complete
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


//This function initiates the fetch request for delete and sends it to the API
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//this is fetching the data on the plumbers from the API
export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}

//create a function to return a copy of the data being fetched in fetchRequests
export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({ ...plumber }))
}

//create a function to perform a POST request to save the completion obj to the API
export const saveCompletion = (chosenPlumber) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chosenPlumber)
    }
    //dispatch custom event after the POST operation is complete
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//create a function to retrieve the completion objs from the API
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}

//create a function to return a copy of the data being fetched in fetchRequests
export const getCompletion = () => {
    return applicationState.completions.map(completion => ({ ...completion }))
}