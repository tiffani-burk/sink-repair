import { getRequests } from "./dataAccess.js"

export const convertRequestToListItems = (requestObj) => {
    return `<li> 
    ${requestObj.description} 
    </li>`
}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListItems).join("")}
        </ul>
    `
    return html
}