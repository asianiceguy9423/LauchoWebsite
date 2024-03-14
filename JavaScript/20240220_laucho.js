function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

/*navbar法律資訊內展開與隱藏*/
document.addEventListener('DOMContentLoaded', function () {
  const sdropdownClik = document.querySelector('.sdropdownClik');
  const sdropdowns = document.querySelectorAll('.sdropdown'); // 获取所有的.sdropdown

  // 隐藏初始状态的sdropdown
  sdropdowns.forEach(function(sdropdown) {
    sdropdown.style.display = 'none';
  });

  sdropdownClik.addEventListener('click', function () {
      // 遍历所有的.sdropdown，切换它们的显示与隐藏
      sdropdowns.forEach(function(sdropdown) {
        if (sdropdown.style.display === 'none') {
          sdropdown.style.display = 'flex';
        } else {
          sdropdown.style.display = 'none';
        }
      });
  });
});


/*首頁_服務項目_case*/
function mouseOver01(element){
  element.querySelector('.case_text').innerHTML = '民事案件查看更多';
}
function mouseOut01(element){
  element.querySelector('.case_text').innerHTML = '';
}
function mouseOver02(element){
  element.querySelector('.case_text').innerHTML = '刑事案件查看更多';
}
function mouseOut02(element){
  element.querySelector('.case_text').innerHTML = '';
}
function mouseOver03(element){
  element.querySelector('.case_text').innerHTML = '智慧財產查看更多';
}
function mouseOut03(element){
  element.querySelector('.case_text').innerHTML = '';
}
function mouseOver04(element){
  element.querySelector('.case_text').innerHTML = '車禍查看更多';
}
function mouseOut04(element){
  element.querySelector('.case_text').innerHTML = '';
}


