
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

    const applyButtons = [...document.querySelectorAll('.applyButton')];

    const localStorageList = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

    console.log(localStorageList)

    if(localStorageList != null && localStorageList.length > 0){

      applyButtons.forEach((button) => {
        if(localStorageList.find((job) => job.id === Number(button.dataset.id))){
          button.innerText = "Remove Application"
        }
      })
      
    }

}

renderJobs(jobsData);

function selectJobs(jobsList) {
    const addJobButtons = [...document.querySelectorAll('.applyButton')];

    const localStorageSJ = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

    addJobButtons.forEach((button) => {
        button.addEventListener('click', (event) => {

            const selectedJob = jobsData.find(job => job.id === Number(event.target.dataset.id));

            if(localStorageSJ.length === 0){

              localStorageSJ.push(selectedJob);

              button.innerText = "Remove application"

              localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageSJ));

              renderSelectedJobs(localStorageSJ);
            }
            else if(localStorageSJ.find((elem) => elem.id === selectedJob.id) === undefined) {
              localStorageSJ.push(selectedJob);

              button.innerText = "Remove application"


              localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageSJ));

              renderSelectedJobs(localStorageSJ);

            } else {
              event.target.innerText = "Apply";

              const indexOfElement = localStorageSJ.findIndex(job => job.id === selectedJob.id);

              localStorageSJ.splice(indexOfElement, 1);

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

  const localStorageList = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

  if(localStorageList.length === 0){
    checkLocalStorage ();
  }

  removeJobButton()
}

function checkLocalStorage () {

  const arrayLocalStorage = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));
  const selectedJobsList = document.querySelector('.selectedJobsList');

  if(localStorage.length === 0 || selectedJobsList.innerHTML == ""){

    localStorage.setItem('@webwomen:jobsselected', JSON.stringify([]));

    selectedJobsList.insertAdjacentHTML('beforeend', 
    `<p>You haven't selected any job yet.</p>`
    )

  } else {
    renderSelectedJobs(JSON.parse(localStorage.getItem('@webwomen:jobsselected')))
  }

}


function removeJobButton () {

  const removeButtons = [...document.querySelectorAll('.removeButton')]
  const applyButtons = [...document.querySelectorAll('.applyButton')];

  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {

      const localStorageList = JSON.parse(localStorage.getItem('@webwomen:jobsselected'));

      const jobIndex = localStorageList.findIndex((job) => job.id === Number(event.target.dataset.id));

      localStorageList.splice(jobIndex, 1);

      localStorage.setItem('@webwomen:jobsselected', JSON.stringify(localStorageList));

      applyButtons.find((applyButton) => applyButton.dataset.id === button.dataset.id).innerText = "Apply";

      renderSelectedJobs(localStorageList);


    })
  })

}

checkLocalStorage ()


