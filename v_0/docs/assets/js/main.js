"use strict";const btnDesign=document.querySelector(".js__designRotate"),displayable=document.getElementsByClassName("js__displayNone"),opendesign=function(){displayable[0].classList.toggle("js__show"),displayable[1].classList.remove("js__show"),displayable[2].classList.remove("js__show"),btnDesign.classList.toggle("js__arrowRotate"),btnFill.classList.remove("js__arrowRotate"),btnShare.classList.remove("js__arrowRotate")};btnDesign.addEventListener("click",opendesign);const btnFill=document.querySelector(".js__fillRotate"),openFill=function(){displayable[1].classList.toggle("js__show"),displayable[0].classList.remove("js__show"),displayable[2].classList.remove("js__show"),btnFill.classList.toggle("js__arrowRotate"),btnDesign.classList.remove("js__arrowRotate"),btnShare.classList.remove("js__arrowRotate")};btnFill.addEventListener("click",openFill);const btnShare=document.querySelector(".js__shareRotate"),openShare=function(){displayable[2].classList.toggle("js__show"),displayable[0].classList.remove("js__show"),displayable[1].classList.remove("js__show"),btnShare.classList.toggle("js__arrowRotate"),btnDesign.classList.remove("js__arrowRotate"),btnFill.classList.remove("js__arrowRotate")};btnShare.addEventListener("click",openShare);const checkBlue=document.querySelector(".js-checkedBlue"),checkRed=document.querySelector(".js-checkedRed"),checkGrey=document.querySelector(".js-checkedGrey"),border=document.querySelector(".js-border"),nameCard=document.querySelector(".js__name--Card"),social=document.querySelectorAll(".js-socialLogos");checkRed.addEventListener("change",e=>{if(e.target.checked){border.style.borderLeft="5px solid #420101",nameCard.style.color="#bd1010";for(let e=0;e<social.length;e++)social[e].style.border="2px solid #e95626",social[e].style.color="#420101"}}),checkBlue.addEventListener("change",e=>{if(e.target.checked){border.style.borderLeft="5px solid #114e4e",nameCard.style.color="#438792";for(let e=0;e<social.length;e++)social[e].style.border="2px solid #438792",social[e].style.color="#114e4e"}}),checkGrey.addEventListener("change",e=>{if(e.target.checked){border.style.borderLeft="5px solid #3e5b65",nameCard.style.color="#eab052";for(let e=0;e<social.length;e++)social[e].style.border="2px solid #a0c0cf",social[e].style.color="#3e5b65"}});const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})\n  `,profilePreview.classList.add("eatMe"),data.profileImg=fr.result,setLocalStorage()}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const inputList=document.querySelectorAll(".js-fill__input");let data={fullName:"",job:"",profileImg:"",mail:"",telephone:"",linkedin:"",github:""};const saveField=function(e){data[e.currentTarget.id]=e.currentTarget.value,setLocalStorage(),render()};function render(e){document.querySelector("#js-fullName-card").innerHTML=data.fullName||"Barry Allen - Flash",document.querySelector("#js-job-card").innerHTML=data.job||"The Fastest Men Alive",document.querySelector("#profileImg").style=`background-image:url(${data.profileImg||"./assets/images/Flash.png"})`;document.querySelector("#previewImg").style=`background-image:url(${data.profileImg||"./assets/images/Flash.png"})`,document.querySelector("#js-telephone-card").href=data.telephone||"#",document.querySelector("#js-mail-card").href=data.mail||"#",document.querySelector("#js-linkedin-card").href=data.linkedin||"#",document.querySelector("#js-github-card").href=data.github||"#",document.querySelector(".js-design__colors")}for(const e of inputList)e.addEventListener("input",saveField);const shareLink=document.querySelector(".js-link"),btnTwitter=document.querySelector(".js-share"),clickShare=document.querySelector(".js-share__button"),openTwitter=function(e){e.preventDefault(),shareLink.classList.add("js__show"),clickShare.classList.add("shareSent"),setLocalStorage()};btnTwitter.addEventListener("click",openTwitter);const btnReset=document.querySelector(".js-sectionOneBtn");function resetForm(){for(const e of inputList)e.value="";data.fullName="",data.job="",data.profileImg="",data.telephone="",data.mail="",data.linkedin="",data.github="",render(),document.querySelector("#profileImg").style=data.profileImg||"background-image:url(./assets/images/Flash.png)";const e=document.querySelector("#previewImg");e!==data.previewImg&&(profilePreview.classList.remove("eatMe"),e.style=""),border.style.borderLeft="5px solid #438792",nameCard.style.color="#114e4e";for(let e=0;e<social.length;e++)social[e].style.border="2px solid  #a2deaf",social[e].style.color="#114e4e"}btnReset.addEventListener("click",resetForm),render();const buttonShare=document.querySelector(".js-btn--create"),twitterContainer=document.querySelector(".js-twitterContainer"),shareTwitter=document.querySelector(".js-section__link--share"),linkShare=document.querySelector(".link--share"),buttonTwitter=document.querySelector(".button--share");function sendRequest(){const e={photo:data.profileImg,name:data.fullName,email:data.mail,github:data.github,job:data.job,linkedin:data.linkedin};fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}function showURL(e){const t=document.querySelector(".link--share");e.success?t.innerHTML='<a class="link--share" href='+e.cardURL+">"+e.cardURL+"</a>":t.innerHTML="ERROR:"+e.error}function createTwitterLink(e){const t=document.querySelector(".button--share"),r=encodeURIComponent("¡He creado mi tarjeta con star coding labs profile cards!"),o=document.querySelector(".link--share").href;t.href=`https://twitter.com/intent/tweet?text=${r}&url=${o}`}function showLinkSection(){twitterContainer.classList.remove("hidden"),shareTwitter.classList.remove("hidden--border"),buttonShare.classList.add("change-button")}function setLocalStorage(){console.log("set local storage"),localStorage.setItem("data",JSON.stringify(data))}function getFromLocalStorage(){const e=JSON.parse(localStorage.getItem("data"))||data;data=e,rePaintInput(),render()}function rePaintInput(){document.querySelector("#fullName").value=data.fullName,document.querySelector("#job").value=data.job,document.querySelector("#mail").value=data.mail,document.querySelector("#telephone").value=data.telephone,document.querySelector("#linkedin").value=data.linkedin,document.querySelector("#github").value=data.github,data.profileImg&&(document.querySelector("#profileImg").style.backgroundImage=`url(${data.profileImg})`,document.querySelector("#previewImg").style.backgroundImage=`url(${data.profileImg})`)}buttonShare.addEventListener("click",showLinkSection),buttonShare.addEventListener("click",sendRequest),buttonTwitter.addEventListener("click",createTwitterLink),getFromLocalStorage();