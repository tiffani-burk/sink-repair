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

//create a functio nto return a copy of the data being fetched in fetchRequests
export const getRequests = () => {
    return database.fetchRequests.map(fetchRequest => ({...fetchRequest}))
}