const getElementById = (id) => document.getElementById(id);
// alert props
// icon,
// alertTitle,
// alertMessage,
// alertBtnTitle,
// alertThemeColor
function tabSwitch() {
  const donationTab = getElementById("donationTab");
  const historyTab = getElementById("historyTab");
  const donationSection = getElementById("donationSection");
  const historySection = getElementById("historySection");
  const donatedForFood = getElementById("donatedForFood");
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

  const foodDonate = document.getElementById("foodDonate");
  foodDonate.addEventListener("click", (event) => {
    event.preventDefault();
    let previousAmount = Number(donatedForFood.innerText);
    console.log(previousAmount);
    const forFood = getValueByKey("food");
    if (forFood >= 100 && forFood <= 1000000000) {
      let newAmount = previousAmount + forFood;
      donatedForFood.innerText = String(newAmount);
      notificationAlert(
        "success",
        "Your action is successfull",
        "You have debited for the food for Gaza",
        "Yes",
        "#0d99ff"
      );
    } else {
      notificationAlert(
        "error",
        "Something Went Wrong!",
        "Your data is not correct. Please enter correct data",
        "Close",
        "#0d99ff"
      );
    }
  });

  historyTab.addEventListener("click", () => {
    notificationAlert(
      "success",
      "Your action is successfull",
      "You have debited for the food for Gaza",
      "Yes",
      "#0d99ff"
    );
    donationTab.classList.remove("btn-active");
    historyTab.classList.add("btn-active");
    historySection.style.display = "block";
    donationSection.style.display = "none";
  });
}
tabSwitch();
document.addEventListener("DOMContentLoaded", tabSwitch);
