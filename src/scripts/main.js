import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumbers, fetchCompletions } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

    const render = () => {
        fetchRequests()
            .then(() => fetchPlumbers())
            .then(() => fetchCompletions())
            .then(
                () => {
                    mainContainer.innerHTML = SinkRepair()
                }
            )
}

render()

//invoke rendor function to build html again
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

