import { divContent } from "./pageLoad";

const reservation = {
  getInput: function () {
    const inputeCard = document.createElement("div");
    inputeCard.className = "inputeCard";
    const reservTitl = document.createElement("h1");
    reservTitl.className = "reservTitle";
    reservTitl.textContent = "Reservation";
    divContent.appendChild(inputeCard);

    const myForm = document.createElement("form");
    inputeCard.appendChild(reservTitl);
    inputeCard.appendChild(myForm);

    const client = document.createElement("input");
    client.setAttribute("placeholder", "Name");
    const email = document.createElement("input");
    email.setAttribute("placeholder", "email@");
    const persons = document.createElement("select");
    const submitBtn = document.createElement("button");
    const phoneNumber = document.createElement("input");
    phoneNumber.setAttribute("placeholder", "06-***-***-**");
    submitBtn.className = "submitBtn";
    submitBtn.textContent = "Reserve";

    myForm.appendChild(client);
    myForm.appendChild(email);
    myForm.appendChild(phoneNumber);
    myForm.appendChild(persons);
    myForm.appendChild(submitBtn);

    const optionOne = document.createElement("option");
    optionOne.textContent = "2 persons";
    const optionTwo = document.createElement("option");
    optionTwo.textContent = "4 persons";
    const optionThree = document.createElement("option");
    optionThree.textContent = "6 persons";
    const optionFour = document.createElement("option");
    optionFour.textContent = "8+ persons";

    persons.appendChild(optionOne);
    persons.appendChild(optionTwo);
    persons.appendChild(optionThree);
    persons.appendChild(optionFour);

    submitBtn.addEventListener("click", function () {
      if (
        client.value === "" ||
        email.value === "" ||
        phoneNumber.value === ""
      ) {
        return alert("Please enter your info !!");
      } else {
        return alert(`thank you Mr.${client.value}!`);
      }
    });
  },
};
export { reservation };
