function mouseOver(element){
  element.querySelector('.case_text').innerHTML = 'text text';
}
function mouseOut(element){
  element.querySelector('.case_text').innerHTML = '';
}
function redirectToAboutPage(){
  window.location.href = 'about.html';
}
function redirectToTeamPage(){
  window.location.href = 'team.html';
}
function redirectToInformationPage(){
  window.location.href = 'information.html';
}
function redirectToConnectionPage(){
  window.location.href = 'connection.html';
}

/*這是這是法律資訊頁面*/
function wordPageLink() {
  let currentUrl = window.location.href;
  if (currentUrl.indexOf("CA") !== -1) {
    document.querySelector('.page_link').innerText = "車禍";
  } else if (currentUrl.indexOf("IPR") !== -1) {
    document.querySelector('.page_link').innerText = "智慧財產";
  } else if (currentUrl.indexOf("LB") !== -1) {
    document.querySelector('.page_link').innerText = "勞資糾紛";
  } else if (currentUrl.indexOf("CC") !== -1) {
    document.querySelector('.page_link').innerText = "民事案件";
  } else if (currentUrl.indexOf("CrC") !== -1) {
    document.querySelector('.page_link').innerText = "刑事案件";
  }
}

function wordPageLinkOn() {
  let currentUrl = window.location.href;
  if (currentUrl.indexOf("CA") !== -1) {
    window.location.href = "CAPage.html";
    return false;
  } else if (currentUrl.indexOf("IPR") !== -1) {
    window.location.href = "IPRPage.html";
    return false;
  } else if (currentUrl.indexOf("LB") !== -1) {
    window.location.href = "LBPage.html";
    return false;
  } else if (currentUrl.indexOf("CC") !== -1) {
    window.location.href = "CCPage.html";
    return false;
  } else if (currentUrl.indexOf("CrC") !== -1) {
    window.location.href = "CrCPage.html";
    return false;
  }
}

function wordPageIs(){
  document.querySelector('.pageName').innerText = document.querySelector('.page2 .up_text .title').innerText;
}