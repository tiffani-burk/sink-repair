
import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"
import { Completions } from "./completions.js"

export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        <div class="request-description"> 
        <h3>Description</h3>
        </div>
      ${Requests()}
    </section>
    <section> 
    ${Completions()}
    </section>
    `
}

