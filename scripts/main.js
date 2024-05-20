const myImage = document.querySelector('img');
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');

    if(mySrc === "images/profile.jpg") {
        myImage.setAttribute('src', 'images/profile2.jpg')
    } else {
        myImage.setAttribute('src', 'images/profile.jpg')
    }
};


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Enter Your Name: ");
    localStorage.setItem('name', myName);
    myHeading.textContent = myName.toUpperCase();
}