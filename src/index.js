import Person from "./person";

document.addEventListener("DOMContentLoaded", () => {
  const taro = new Person("Taro");
  const hi = document.getElementById("hi");
  hi.addEventListener("click", () => {
    document.getElementById("hello").value = taro.hello();
  });
});
