import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
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
