/* Document Object Model */

const EntryForm = document.getElementById('entryform')
const Name  = document.getElementById('name')
const Roll = document.getElementById('roll')
const Address = document.getElementById('address')
const Transcript = document.getElementById('transcript')
const Output_btn = document.querySelector('.btn_output')
const Show_data = document.querySelector('.show_data')

let counter = parseInt(localStorage.getItem('counter'))||0

EntryForm.addEventListener('submit', function(event){
    event.preventDefault()
    const roll = Number(Roll.value)

    if (roll <= 0 || !Number.isInteger(roll)) {
        alert("Invalid Roll Number")
        return
    }

    ++counter;
    localStorage.setItem('counter', counter)

    const user_object = {
        name: Name.value,
        roll: Number(Roll.value),
        address: Address.value,
    }

    localStorage.setItem(`user${counter}`, JSON.stringify(user_object))
    UpdateTranscript(user_object)  // show updated transcript

    Name.value = ''
    Roll.value = ''
    Address.value = ''
})

Output_btn.addEventListener('click', function(event){
    event.preventDefault()
    console.log("btn clicked")

    Show_data.innerHTML = ''
    for(let i = 1; i <= counter; i++){
        let data = localStorage.getItem(`user${i}`)
        if(data){
            let obj = JSON.parse(data);
            ShowOutput(obj, i)
        }
    }
})

function UpdateTranscript(obj){ //function to dynamically render UI in transcript section
    Transcript.innerHTML = `
    <h2>Transcript</h2>`

    let data = localStorage.getItem(`user${counter}`)
    if(data){
        let obj = JSON.parse(data);
        Transcript.innerHTML += description_list(obj)
    }
}

function ShowOutput(obj, i){    //function to dynamically render UI in section_output section
     Show_data.innerHTML += `
        <div class = "border">
            <h2> User${i}</h2>
            ${description_list(obj)}
        </div>
    `
}

function description_list(obj){
    return `
        <dl class = "details">
            <dt> Name: </dt>
            <dd> ${obj.name} </dd>

            <dt> Roll: </dt>
            <dd> ${obj.roll} </dd>

            <dt> Address: </dt>
            <dd> ${obj.address} </dd>
        </dl>
    `
}

