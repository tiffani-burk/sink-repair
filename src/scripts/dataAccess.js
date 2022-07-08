const applicationState = {
    requests: []
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

//create a function to return a copy of the data being fetched in fetchRequests
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
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
//add a mainContainer variable for the fetch broadcast the stateChange to 
const mainContainer = document.querySelector("#container")

//This function initiates the fetch request for delete and sends it to the API
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}