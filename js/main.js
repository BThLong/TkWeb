// validation form login
const inputUsername = document.querySelector(".email");
const inputPassword = document.querySelector(".mt-khu");
const btnLogin = document.querySelector(".ng-nhp-parent");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "web.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
