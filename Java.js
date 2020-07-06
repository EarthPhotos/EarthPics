var pics=document.getElementsByClassName('expand1')
var light=document.getElementsByClassName('lightbox')
var body=document.getElementsByTagName('body')
var close=document.getElementsByClassName('X')
var pics2=document.getElementsByClassName('expand2')
var pics3=document.getElementsByClassName('expand3')
var pics4=document.getElementsByClassName('expand4')
var pics5=document.getElementsByClassName('expand5')
var pics6=document.getElementsByClassName('expand6')

function bigPic1(){
	light[0].style.visibility="hidden";
	pics2[0].style.visibility="hidden";
	pics3[0].style.visibility="hidden";
	body[0].style.background="black";
	pics[0].style.visibility="visible";
	close[0].style.visibility="visible";
	pics[0].style.transform="scale(3)";
	pics[0].style.margin="15% 0 0 25%";
	pics4[0].style.visibility="hidden";
	pics5[0].style.visibility="hidden";
	pics6[0].style.visibility="hidden";
}
function bigPic2(){
	light[0].style.visibility="hidden";
	body[0].style.background="black";
	pics2[0].style.visibility="visible";
	pics[0].style.visibility="hidden";
	pics3[0].style.visibility="hidden";
	close[0].style.visibility="visible";
	pics2[0].style.transform="scale(3)";	
	pics2[0].style.margin="15% 0 0 10%";
	pics4[0].style.visibility="hidden";
	pics5[0].style.visibility="hidden";
	pics6[0].style.visibility="hidden";
}
function bigPic3(){
	light[0].style.visibility="hidden";
	body[0].style.background="black";
	pics3[0].style.visibility="visible";
	pics[0].style.visibility="hidden";
	pics2[0].style.visibility="hidden";
	close[0].style.visibility="visible";
	pics3[0].style.transform="scale(3)";
	pics4[0].style.visibility="hidden";
	pics3[0].style.margin="15% 0 0 -15%";
	pics5[0].style.visibility="hidden";
	pics6[0].style.visibility="hidden";
}
function bigPic4(){
	light[0].style.visibility="hidden";
	body[0].style.background="black";
	pics5[0].style.visibility="hidden";
	pics4[0].style.visibility="visible";
	pics3[0].style.visibility="hidden";
	pics[0].style.visibility="hidden";
	pics2[0].style.visibility="hidden";
	close[0].style.visibility="visible";
	pics4[0].style.transform="scale(3)";
	pics4[0].style.margin="0 0 0 20%";
	pics6[0].style.visibility="hidden";
}
function bigPic5(){
	light[0].style.visibility="hidden";
	body[0].style.background="black";
	pics5[0].style.visibility="visible";
	pics4[0].style.visibility="hidden";
	pics3[0].style.visibility="hidden";
	pics[0].style.visibility="hidden";
	pics2[0].style.visibility="hidden";
	close[0].style.visibility="visible";
	pics5[0].style.transform="scale(3)";
	pics5[0].style.margin="0 0 15% 0";
	pics6[0].style.visibility="hidden";
}
function bigPic6(){
	light[0].style.visibility="hidden";
	body[0].style.background="black";
	pics6[0].style.visibility="visible";
	pics5[0].style.visibility="hidden";
	pics4[0].style.visibility="hidden";
	pics3[0].style.visibility="hidden";
	pics[0].style.visibility="hidden";
	pics2[0].style.visibility="hidden";
	close[0].style.visibility="visible";
	pics6[0].style.transform="scale(3)";
	pics6[0].style.margin="0 0 0 -15%";
}
function goBack(){
	light[0].style.visibility="visible";
	pics2[0].style.visibility="visible";
	pics[0].style.visibility="visible";
	pics3[0].style.visibility="visible";
	pics4[0].style.visibility="visible";
	pics5[0].style.visibility="visible";
	pics6[0].style.visibility="visible";
	body[0].style.background="none";
	close[0].style.visibility="hidden";
	pics[0].style.transform="scale(1)";	
	pics2[0].style.transform="scale(1)";
	pics3[0].style.transform="scale(1)";
	pics4[0].style.transform="scale(1)";
	pics5[0].style.transform="scale(1)";
	pics6[0].style.transform="scale(1)";
	pics[0].style.margin="20px 0px 0px 50px";
	pics2[0].style.margin="20px 0px 0px 50px";
	pics3[0].style.margin="20px 0px 0px 50px";
	pics4[0].style.margin="20px 0px 0px 50px";
	pics5[0].style.margin="20px 0px 0px 50px";
	pics6[0].style.margin="20px 0px 0px 50px";
}
	