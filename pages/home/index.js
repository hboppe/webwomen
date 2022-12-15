/* Desenvolva sua lógica aqui... */

function renderJobs(jobsList){

    const jobsSection = document.querySelector('.jobsList');

    jobsList.map((job) => {
        jobsSection.insertAdjacentHTML("beforeend", 
        `
        <li class="jobOffer">

            <div class="jobOffer__topContainer">
              <h4>${job.title} - React JS</h4>
              
              <div class="small__container">
                <small>${job.enterprise}</small>
                <small>${job.location}</small>
              </div>
            </div>
           

            <p>${job.descrition}</p>

            <div class="tagButton__container">
                <div class="tag__container">
                <p class="tag">${job.modalities[0]}</p>
                <p class="tag">${job.modalities[1]}</p>
                </div>
              
              <button class="applyButton" data-id: "${job.id}">Apply</button>
            </div>
        `)
    })
}

renderJobs(jobsData)


