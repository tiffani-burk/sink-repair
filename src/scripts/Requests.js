import { getRequests, saveCompletion, fetchCompletions } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()
    let plumbers = getPlumbers()
    //this function is taking the making html rep out of the requests
    let convertRequestToListItems = (requestObj) => {
    
        return `<li class="request-items"> 
        ${requestObj.description} 
        <select class="plumbers" id="plumbers">
        <option value="0">Choose</option>
        ${
            plumbers.map(
                plumber => {
                    return `<option value="${requestObj.id}--${plumber.id}">${plumber.name}</option>`
                }
            ).join("")
        }
        </select>
        <button class="request__delete"
        id="request--${requestObj.id}">
        Delete
        </button>
        </li>`
        
    }
    let html = `
        <article>
          <div>  
          ${requests.map(convertRequestToListItems).join("")} 
          </div>
        </article>
    `
    return html
}

const mainContainer = document.querySelector("#container")
//click event for the delete request button 
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

//add an event listener to listen for the change of options of plumbers
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: parseInt(requestId),
                plumberId: parseInt(plumberId),
                timestamp: Date.now
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                saveCompletion(completion)
        }
    }
)

