const writeButton = document.getElementById('write-button');

function toggleHeart(button) {
    button.classList.toggle('active'); 
  }


writeButton.addEventListener('click', function () {
  // 다른 페이지로 이동
  window.location.href = "/WritePage/Write.html";
});
