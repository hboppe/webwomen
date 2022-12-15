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
              
              <button data-id: "${job.id}">Apply</button>
            </div>
        `)
    })
}

renderJobs(jobsData)

/* 
<li class="jobOffer">

            <div class="jobOffer__topContainer">
              <h4>Pessoa desenvolvedora front-end - React JS</h4>
              
              <div class="small__container">
                <small>Kenzie Academy</small>
                <small>Curitiba</small>
              </div>
            </div>
           

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt reprehenderit voluptatem culpa rerum fugit laudantium velit vel debitis perferendis, explicabo autem iure fuga recusandae numquam, voluptatibus aperiam est! Sit.</p>

            <div class="tagButton__container">

              <p class="tag">Home Office</p>

              <button>Apply</button>
            </div>
          </li>
*/

