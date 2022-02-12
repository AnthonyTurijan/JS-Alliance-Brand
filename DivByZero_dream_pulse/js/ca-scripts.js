var customerName = "Alliance  ";
var allianceIntroText1 = 'Alliance was founded in 1931 by Alber Daniels.'
var allianceIntroText2 = 'The compant is a leader in P.C. mandurafturing.'
var aliianceaboutPara1 = 'We deliver the best service this side of creation'
var allianceaboutPara2 = 'Our motto is satisfaction guaranteed'
var allianceaboutPara3 = '1-800-565-5656'
// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {
    let header = document.getElementById('tm-header');
    header.textContent = customerName;
    let introHeader = document.getElementById('introheader');
    introHeader.textContent = customerName;

    let intropara1 = document.getElementById('intropara1');
    intropara1.textContent = allianceIntroText1
    let intropara2 = document.getElementById('intropara2')
    intropara2.textContent = allianceIntroText2
    let aboutpara1 = document.getElementById('aboutpara1')
    aboutpara1.textContent = aliianceaboutPara1
    let aboutpara2 = document.getElementById('aboutpara2')
    aboutpara2.textContent = allianceaboutPara2
    let addressPara = document.getElementById('addresspara')
    addressPara.textContent = allianceaboutPara3
};

function toggleColors() {
    let elementOld = document.querySelectorAll('.tm-white-rect')
    for (i=0; i <elementOld.length; i++){
        elementOld[i].classList.add('tm-blue-rect');
        elementOld[i].classList.remove('tm-white-rect')
    }
};

//<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
function hideElement() {
    let socialLinksElement = document.getElementById('social-links')
    socialLinksElement.style = 'display: none'
    //socialLinksElement.style.display = 'none'
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: change about text-->

    //<p id="aboutpara2"> <!--todo: change about text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company address/phone number text-->

}; 



