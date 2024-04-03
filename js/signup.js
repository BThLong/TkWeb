// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".email-ng-k");
const inputPasswordRegister = document.querySelector(".mt-khu1");
const inputConfirmPasswordRegister = document.querySelector(".nhp-li-mt");
const btnRegister = document.querySelector(".to-ti-khon");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    inputConfirmPasswordRegister.value === "" ||
    inputPasswordRegister.value != inputConfirmPasswordRegister.value
  ) {
    alert("vui lòng không để trống và kiểm tra lại mật khẩu");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "ng-nhp-v2.html";
  }
});
