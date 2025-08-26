const getElementById = (id) => document.getElementById(id);

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
    alertbox.render({
      alertIcon: "success",
      title: "Thank You!",
      message: "AlertBox Popup Message",
      btnTitle: "Ok",
      themeColor: "#000000",
      btnColor: "#7CFC00",
      btnColor: true,
    });
    historySection.style.display = "none";
    donationSection.style.display = "block";
    donationTab.classList.add("btn-active");
    historyTab.classList.remove("btn-active");
  });
  historyTab.addEventListener("click", () => {
    alertbox.render({
      alertIcon: "success",
      title: "Thank You!",
      message: "AlertBox Popup Message",
      btnTitle: "Ok",
      themeColor: "#000000",
      btnColor: "#7CFC00",
      btnColor: true,
    });
    donationTab.classList.remove("btn-active");
    historyTab.classList.add("btn-active");
    historySection.style.display = "block";
    donationSection.style.display = "none";
  });
}
tabSwitch();
document.addEventListener("DOMContentLoaded", tabSwitch);
