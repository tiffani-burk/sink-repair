import { getCompletion } from "./dataAccess.js";

//create a function to show a list of the completed requests 
export const Completions = () => {
    const completions = getCompletion()

    const completionString = (completion) => {
        return `<li> 
        ${completion.description}
        </li>`
    }

    let html = `<ul>
    ${completions.map(completionString).join("")}
    </ul>`

    return html
}