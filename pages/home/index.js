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
              
              <button class="applyButton" data-id= ${job.id} >Apply</button>
            </div>
        `)
    })
}

renderJobs(jobsData);

function selectJobs(jobsList) {
    const addJobButtons = [...document.querySelectorAll('.applyButton')];

    addJobButtons.forEach((button) => {
        button.addEventListener('click', (event) => {

            const selectedJob = jobsData.find(job => job.id === Number(event.target.dataset.id));

            const localStorageSJ = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

            if(localStorageSJ.length === 0){
              localStorageSJ.push(selectedJob);

              localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageSJ));

              renderSelectedJobs(localStorageSJ);
            }
            else if(localStorageSJ.find((elem) => elem.id === selectedJob.id) === undefined) {
              localStorageSJ.push(selectedJob);

              localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageSJ));

              renderSelectedJobs(localStorageSJ);
            }
        })
    })
}

selectJobs(jobsData)

function renderSelectedJobs(jobsSelected){
  const selectedJobsList = document.querySelector('.selectedJobsList');

  selectedJobsList.innerHTML = '',


  jobsSelected.forEach((job) => {
    selectedJobsList.insertAdjacentHTML('beforeend', 
      `
      <li class="selectedJob">

        <h5>${job.title}</h5>

        <div class="small__container">

          <small>${job.enterprise}</small>

          <small>${job.location}</small>

          </div>

          <button class="removeButton" data-id="${job.id}" ><img src="/assets/img/trash.svg" alt="Trash icon"></button> 
      </li>
      <hr>
      `)

  })

  removeJobButton()

}


function checkLocalStorage () {

  if(localStorage.length === 0){
    localStorage.setItem('@webwomen:jobsselected', JSON.stringify([]))

  } else {
    renderSelectedJobs(JSON.parse(localStorage.getItem('@webwomen:jobsselected')))
  }

}

checkLocalStorage ()

function removeJobButton () {

  const removeButtons = [...document.querySelectorAll('.removeButton')]

  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {

      const localStorageList = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

      const jobIndex = localStorageList.findIndex((job) => job.id === Number(event.target.dataset.id));

      localStorageList.splice(jobIndex, 1);

      localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageList));

      renderSelectedJobs(localStorageList);
    })
  })
}

