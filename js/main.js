const getElementById = (id) => document.getElementById(id);
const date = new Date().toLocaleString();
// const year = date.getFullYear();
// const month = date.getMonth();
// const dateToday = date.getDate();
// const hours = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
function tabSwitch() {
  const donationTab = getElementById("donationTab");
  const historyTab = getElementById("historyTab");
  const donationSection = getElementById("donationSection");
  const historySection = getElementById("historySection");
  //   Default state
  donationSection.style.display = "block";
  historySection.style.display = "none";
  //   Switching tab
  donationTab.addEventListener("click", () => {
    historySection.style.display = "none";
    donationSection.style.display = "block";
    donationTab.classList.add("btn-active");
    historyTab.classList.remove("btn-active");
  });

  historyTab.addEventListener("click", () => {
    donationTab.classList.remove("btn-active");
    historyTab.classList.add("btn-active");
    historySection.style.display = "block";
    donationSection.style.display = "none";
  });
}

const foodDonate = getElementById("foodDonate");
const donatedForFood = getElementById("donatedForFood");
const foodDonationSection = getElementById("foodDonationSection");
const donationForm = getElementById("donationForm");
const myBalanceID = getElementById("myBalance");

// food donation event
foodDonate.addEventListener("click", () => {
  donationForm.classList.remove("hidden");
  // notificationAlert(
  //   "error",
  //   "Something Went Wrong!",
  //   `We recieve minimum 100 and maximun 1000000000. If you are looking for another amount please contact the authority`,
  //   "Close",
  //   "#ffcc00"
  // );
});
// Form define

function handleDonation(event) {
  event.preventDefault();
  const myBalance = Number(myBalanceID.innerText);

  const donorPhone = getElementById("donorPhone").value.trim();
  const donorName = getElementById("donorName").value.trim();
  const donorEmail = getElementById("donorEmail").value.trim();
  const description = getElementById("description").value.trim();

  if (!donorName) {
    alert("Please enter your full name");
    return;
  }
  if (!donorEmail) {
    alert("Please enter a valid email address");
    return;
  }

  const forFood = getValueByKey("food");
  let previousAmount = Number(donatedForFood.innerText);
  let newAmount = previousAmount + forFood;
  const myRemainingBalance = myBalance - forFood;
  if (forFood > myBalance) {
    alert("Insufficient Balance!");
    return;
  }

  const donationData = {
    amount: forFood,
    name: donorName,
    email: donorEmail,
    phone: donorPhone,
    narration: description,
  };

  notificationAlert(
    "success",
    "Thanks for your donation for Food",
    `You have donated ${forFood} for food in Gaza`,
    "OK",
    "#0d99ff"
  );

  let historyCard = getElementById("historyCard");
  historyCard.innerHTML += `
          <div class="card border border-1 border-blue-400 shadow-lg mb-5">
            <div class="card-body">
              <h2 class="card-title"> ${forFood} is donated for Food in Gaza</h2>
              <p>
                Time ${date}
              </p>
            </div>
          </div>
  `;

  donatedForFood.innerText = newAmount.toString();
  myBalanceID.innerText = myRemainingBalance.toString();

  //clear and hide form
  donationForm.reset();
  donationForm.classList.add("hidden");
}

// Donate for children function
const childDonate = getElementById("childDonate");
childDonate.addEventListener("click", function () {
  const myBalanceID = getElementById("myBalance");
  const donatedForChildID = getElementById("donatedForChild");
  let myBalance = Number(myBalanceID.innerText);
  let donatedForChild = Number(donatedForChildID.innerText);
  const childrenDonateInput = getValueByKey("children");
  if (childrenDonateInput <= 0) {
    notificationAlert(
      "error",
      "Something Went Wrong!",
      `Please enter correct amount!`,
      "Close",
      "#ffcc00"
    );
    return;
  }
  const newAmountForChild = childrenDonateInput + donatedForChild;
  if (childrenDonateInput > myBalance) {
    alert("You do not have sufficient balance!");
    return;
  }
  notificationAlert(
    "success",
    "Thanks for your donation for Children",
    `You have donated ${childrenDonateInput} for children in Gaza`,
    "OK",
    "#0d99ff"
  );
  let historyCard = getElementById("historyCard");
  historyCard.innerHTML += `
          <div class="card border border-1 border-blue-400 shadow-lg mb-5">
            <div class="card-body">
              <h2 class="card-title"> ${childrenDonateInput} is donated for The Children of Gaza</h2>
              <p>
                Time ${date}
              </p>
            </div>
          </div>
  `;
  let myRemainingBalance = myBalance - childrenDonateInput;
  myBalanceID.innerText = myRemainingBalance.toString();
  donatedForChildID.innerText = newAmountForChild.toString();
});
// Donate for children function
const peopleDonate = getElementById("peopleDonate");
peopleDonate.addEventListener("click", function () {
  const myBalanceID = getElementById("myBalance");
  const donatedForPeopleID = getElementById("donatedForPeople");
  let myBalance = Number(myBalanceID.innerText);
  let donatedForPeople = Number(donatedForPeopleID.innerText);
  const peopleDonateInput = getValueByKey("treatment");
  if (peopleDonateInput <= 0) {
    notificationAlert(
      "error",
      "Something Went Wrong!",
      `Please enter correct amount!`,
      "Close",
      "#ffcc00"
    );
    return;
  }
  const newAmountForChild = peopleDonateInput + donatedForPeople;
  if (peopleDonateInput > myBalance) {
    alert("You do not have sufficient balance!");
    return;
  }
  notificationAlert(
    "success",
    "Thanks for your donation for Children",
    `You have donated ${peopleDonateInput} for children in Gaza`,
    "OK",
    "#0d99ff"
  );
  let historyCard = getElementById("historyCard");
  historyCard.innerHTML += `
          <div class="card border border-1 border-blue-400 shadow-lg mb-5">
            <div class="card-body">
              <h2 class="card-title"> ${peopleDonateInput} is donated for The people of Gaza</h2>
              <p>
                Time ${date}
              </p>
            </div>
          </div>
  `;
  let myRemainingBalance = myBalance - peopleDonateInput;
  myBalanceID.innerText = myRemainingBalance.toString();
  donatedForPeopleID.innerText = newAmountForChild.toString();
});

document.addEventListener("DOMContentLoaded", tabSwitch);
