import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

export const convertRequestToListItems = (requestObj) => {
    return `<li class="request-items"> 
    ${requestObj.description} 
    <button class="request__delete"
    id="request--${requestObj.id}">
    Delete
    </button>
    </li>`
}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
          <li>  
          ${requests.map(convertRequestToListItems).join("")} 
          </li>
        </ul>
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