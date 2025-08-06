document.addEventListener("DOMContentLoaded", function () {
  const smileButton = document.getElementById("smileButton");
  const smileMessage = document.getElementById("smileMessage");

  smileButton.addEventListener("click", function () {
    smileMessage.style.display = "block";
    smileButton.disabled = true;
    smileButton.textContent = "ส่งยิ้มแล้ว 😊";
  });
});
