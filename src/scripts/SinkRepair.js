
import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"
import { CompletedRequests } from "./completions.js"

export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        <div class="request-description"> <div class="text"> 
        <h3 style="padding-left:1rem">Description</h3> <h3> Completed By </h3></div>
        </div>
      ${Requests()}
    </section>
    <section> 
    ${CompletedRequests()}
    </section>
    `
}

