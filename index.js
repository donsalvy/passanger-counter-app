//document.getElementById("count-el").innerText = 5

// let lapsCompleted = 0

// function increment(){
//     lapsCompleted = lapsCompleted + 1
// }

// increment()
// increment()
// increment()


// console.log(lapsCompleted)
// let name = "salvy"
// let message = "you have three new notifications"
// let messageToUser = message + " ," + name
// console.log(messageToUser)

// let name = "salvation"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " ," + name + "!"

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "salvation"
// let greeting = "welcome to uk"
// let myGreeting = greeting + " ," + name
// console.log(myGreeting)
// welcomeEl.innerText = greeting + name

//my code for counter app
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    
} 