// 이미지 업로드 input 요소
const imageInput = document.getElementById('imageInput');
// 미리보기 이미지 요소
const previewImage = document.getElementById('previewImage');

// 이미지 업로드 input의 값이 변경될 때마다 호출되는 함수
imageInput.addEventListener('change', function (event) {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    // 선택한 이미지를 미리보기에 표시
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(selectedImage);
  }
});
