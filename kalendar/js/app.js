const calenderButton =document.querySelector(".btn-start");
const calenderContainer = document.querySelector(".container");
const months = 12;

calenderButton.addEventListener("click",(event) => {
    console.log("test");

    for(let i = 0; i < months; i++){
        console.log(i);
        const calenderDoor = document.createElement("div");
        calenderDoor.classList.add("image"); 
        calenderDoor.gridArea = "door"+(i+1);

        const calenderDoorText = document.createElement('div');
        calenderDoorText.classList.add('text');
        calenderDoorText.innerHTML = i+1;

        calenderDoor.appendChild(calenderDoorText);
        calenderContainer.appendChild(calenderDoor);

        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;

        calenderDoorText.addEventListener('click', (e) => {
            e.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            e.target.style.backgroundColor = "#333";
            e.target.style.opacity = "0";

        });


    }

    event.preventDefault();
});