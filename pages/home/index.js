/* Desenvolva sua lógica aqui... */

function renderJobs(jobsList){

    const jobsSection = document.querySelector('.jobsList');

    localStorage.setItem('@webwomen:jobs', []);

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
              
              <button class="applyButton" data-id= "${job.id}" >Apply</button>
            </div>
        `)
    })
}

renderJobs(jobsData);

function selectJobs(jobsList) {
    const addJobButtons = [...document.querySelectorAll('.applyButton')];

    addJobButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const selectedJob = jobsData.filter(job => job.id === Number(event.target.dataset.id));

            const selectedJobsLS = JSON.stringify(localStorage.getItem('@webwomen:jobs'));

            if(!selectedJobsLS.find(selectedJob)) {
                selectedJobsLS.push(selectedJob);

                localStorage.getItem('@webwomen:jobsselected') = JSON.stringify(selectedJobsLS);

                renderSelectedJobs(selectedJobsLS);
            }
        })
    })
}

selectJobs(jobsData)

function renderSelectedJobs(jobsSelected){
    const selectedJobsList = document.querySelector('.selectedJobsList');

    const selectedJobsLS = JSON.parse(localStorage.getItem('@webwomen:jobs'));

    selectedJobsList.innerHTML = '',

    jobsSelected.forEach((job) => {
        selectedJobsList.insertAdjacentHTML('beforeend', 
        `
        <li class="selectedJob">

            <h5>${job.title}</h5>

            <div class="small__container">

              <small>${jb.enterprise}</small>

              <small>${job.location}</small>

            </div>

            <button class="removeButton" data-id="${job.id}"><img src="/assets/img/trash.svg" alt="Trash icon"></button>
        </li>
        <hr>
        `)

    })

}

renderSelectedJobs(JSON.stringify(localStorage.getItem('@webwomen:jobsselected')))

/* 

<li class="selectedJob">

            <h5>Pessoa desenvolvedora front-end - React JS</h5>

            <div class="small__container">

              <small>Kenzie Academy</small>

              <small>Curitiba</small>

            </div>

            <button class="removeButton" data-id=""><img src="/assets/img/trash.svg" alt="Trash icon"></button>
          </li>
          <hr>
*/