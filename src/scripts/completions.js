import { getCompletion, getPlumbers, getRequests } from "./dataAccess.js";

//create a function to show a list of the completed requests 
// export const Completions = () => {
//     const completions = getCompletion()
//     const plumbers = getPlumbers()

//     let html = `<ul>`
//     const completionString = () => {
//         for (const completion of completions){
//             for (const plumber of plumbers) {
//                 if (completion.plumberId === plumber.id) {
//                     return `<li> 
//                     The service request was completed by ${plumber.name}
//                     </li>`    
//                     }
//             }
//             }
//         }
//         html += `</ul>
//         ${completions.map(completionString).join("")}`
        
//         return html
//     }

//PROBLEM- LOGGING ALL OF THE COMPLETIONS, RATHER THAN JUST THE ONE
    const CompletionsByPlumber = (completion) => {
        // const plumbers = getPlumbers()
        const requests = getRequests()
     
        let listItemArray = requests.map(request =>{
            if (completion.plumberId === 1) {
                return `<li>Maude completed the ${request.description}</li>`
            }
            else if (completion.plumberId === 2) {
                return `<li>Merle completed the ${request.description}</li>`
                }
            })
        return listItemArray
    }


//This is looping through the completions and return a list of html rep of the completions 
    export const CompletedRequests = () => {
        const completions = getCompletion()

        let html = "<ul>"
        
        let listItems = completions.map(CompletionsByPlumber)

        html += listItems.join("")

        html += "</ul>"

        return html
    }

    //if the plumber id matches the plumberId on comoletions, then return a li showing html rep of the name of the plumber that finished the task 