document.addEventListener('DOMContentLoaded', () => {

    
    
    function getDogs(){
        return fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dog_obj => renderDogs(dog_obj))
        
    }

   

    function renderDogs(dog_obj){
        for (const q of dog_obj){

            const table = document.querySelector('#table-body')

            const tableRow = document.createElement('tr')
            tableRow.dataset.id = q.id

            const name = document.createElement('td')
            name.innerText = q.name
            name.classList.add('name')

            const sex = document.createElement('td')
            sex.innerText = q.sex
             sex.classList.add('sex')

            const breed = document.createElement('td')
            breed.innerHTML = q.breed
             breed.classList.add('breed')

            const edit = document.createElement('td')
            const btn = document.createElement('button')

            btn.innerText = 'Edit Dog'
            btn.dataset.id = q.id
            btn.addEventListener('click', function (){



            })

            edit.append(btn)

            tableRow.append(name, breed, sex, edit)
            table.append(tableRow)

        }
    }


    function getDog(id){
        const url = `http://localhost:3000/dogs/${dog_obj.id}`
        return fetch(url)
        .then(res => res.json())
    }



    // function editDog(dog_obj) {
    //     const url = `http://localhost:3000/dogs/${dog_obj.id}`
    //     delete dog_obj.id
    //     const options = {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(dog_obj)
    //     }
    //     return fetch(url, options)
    //       .then(r => r.json())
    //   }
    // }
    getDogs()
})