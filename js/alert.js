const notificationAlert = (
  icon,
  alertTitle,
  alertMessage,
  alertBtnTitle,
  alertThemeColor
) => {
  alertbox.render({
    alertIcon: icon,
    title: alertTitle,
    message: alertMessage,
    btnTitle: alertBtnTitle,
    themeColor: alertThemeColor,
    btnColor: "#0d99ff",
    btnColor: true,
    border: false,
  });
};

// alertbox.render({
//   alertIcon: "success",
//   title: "Thank You!",
//   message: "AlertBox Popup Message",
//   btnTitle: "Ok",
//   border: true,
// });
