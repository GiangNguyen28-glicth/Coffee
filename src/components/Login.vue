<template>
  <div class="model__login">
    <div class="model__login-form">
      <div class="container__login">
        <form class="login-form">
          <img class="form__img" src="@/assets/images/logo.png" alt="" />
          <div>
            <label class="login__label" for="username">Tên người dùng</label>
            <input class="login__input" type="text" name="" id="username" />
          </div>
          <div class="login__input-password">
            <i class="uil uil-eye form__icon eye__open"></i>
            <i class="uil uil-eye-slash form__icon eye__close"></i>
            <label class="login__label" for="password">Mật khẩu</label>
            <input class="login__input" type="password" name="" id="password" />
          </div>
          <p class="login__recovery">Recovery Password</p>
          <button type="submit" class="login__button">Đăng nhập</button>
        </form>
        <div class="login__option">
          <div class="login__google">
            <i class="uil uil-google option__icon"></i>
            <p class="login__description">Google</p>
          </div>
          <div class="login__facebook">
            <i class="uil uil-facebook option__icon"></i>
            <p class="login__description">Facebook</p>
          </div>
        </div>
        <p class="login__register">
          Bạn chưa có tài khoản ? <a href="">Đăng ký</a>
        </p>
      </div>
      <div class="login__image">
        <i class="uil uil-times-circle login__close"></i>
        <img class="login__image" src="@/assets/images/coffe.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.model__login {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
}

.model__login-form {
  position: relative;
  background: #fff;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  display: grid;
  top: 10%;
  width: 50%;
  border-radius: 8px;
}
.container__login {
  grid-column: 1;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.login__input {
  border-radius: 8px;
  padding: 12px 12px;
  width: 90%;
  border: 1px solid;
  margin-left: 12px;
}
.form__icon {
  font-size: 24px;
}
.login__label {
  font-weight: 500;
  color: black;
  margin-bottom: 6px;
  margin-left: 12px;
  display: inline-block;
}
.login-form h3 {
  text-align: center;
}
.eye__open {
  position: absolute;
  right: 10%;
  top: 45%;
}
.eye__open:hover {
  cursor: pointer;
}
.login__input-password {
  position: relative;
  align-items: center;
  margin-top: 12px;
}
.eye__close {
  display: none;
  position: absolute;
  right: 10%;
  top: 45%;
}
.eye__close:hover {
  cursor: pointer;
}
.login__button {
  padding: 12px;
  border-radius: 12px;
  width: 90%;
  margin-left: 12px;
  background: black;
  color: #fff;
  font-weight: 600;
}
.login__button:hover {
  cursor: pointer;
  opacity: 0.8;
}
.login__recovery {
  padding: 12px 0;
  color: blue;
  left: 45%;
  text-align: end;
  width: 90%;
}
.login__recovery:hover {
  cursor: pointer;
  opacity: 0.8;
}
.login__option {
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 100px;
  width: 90%;
  margin-left: 12px;
  align-items: center;
}
.login__google {
  grid-column: 1;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  border-radius: 12px;
}
.login__facebook {
  grid-column: 2;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  border-radius: 12px;
}
.login__google:hover {
  cursor: pointer;
  transform: translateY(-3px);
}
.login__facebook:hover {
  cursor: pointer;
  transform: translateY(-3px);
}
.option__icon {
  font-size: 40px;
  text-align: center;
}
.login__description {
  color: #000;
  font-weight: 500;
}
.login__register {
  padding: 6px 12px;
  text-align: center;
  font-size: 18px;
}
.form__img {
  width: 50%;
  height: 50%;
  display: block;
  margin: auto;
}
.login__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
}
.login__image{
  position: relative;
}
.login__close{
  position: absolute;
  font-size: 32px;
  color: #fff;
  z-index: 3;
  right: 0;
}
.login__close:hover{
  cursor: pointer;
  opacity: 0.6; padding: 12px 24px;
  border-radius: 6px;
  background: red;
}
</style>