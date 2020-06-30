document.addEventListener('DOMContentLoaded', () => {

    
    
    function getDogs(){
        return fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

   

    function renderDogs(dog_obj){
        for (const q of dog_obj){

            const table = document.querySelector('#table-body')

            const tableRow = document.createElement('tr')
            tableRow.dataset.id = q.id

            const name = document.createElement('td')
            name.innerText = q.name

            const sex = document.createElement('td')
            sex.innerText = q.id
            sex.classList.add('sex')

            const breed = document.createElement('td')
            







        }

        
      
        

    }






    getDogs()

})