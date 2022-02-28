import "./styles.css";

const onClickAdd = () => {
  const InputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ
  const div = document.createElement("div");
  div.className = "list";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = "inputText";

  // liタグ 子要素に各要素を設定
  div.appendChild(li);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
