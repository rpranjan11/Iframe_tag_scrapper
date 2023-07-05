
// Size of Screen
screenHeight = window.screen.height;
screenWidth = window.screen.width;
console.log('Screen Size : ', screenWidth, '*', screenHeight)

// Size of browser viewport.
browserHeight = document.documentElement.clientHeight;
browserWidth = document.documentElement.clientWidth;
console.log('Browser Size without header: ', browserWidth, '*', browserHeight)
console.log('Center of Browser Size : ', browserWidth/2, '*', browserHeight/2)

// Size of HTML document (same as pageHeight/pageWidth in screenshot).
BrowserBodyHeight = document.body.clientHeight;
BrowserBodyWidth = document.body.clientWidth;
console.log('BrowserBody Size : ', BrowserBodyWidth, '*', BrowserBodyHeight)

var IframeData = document.getElementsByTagName('iframe'); 
console.log('IframeData : ', IframeData)
var IframeDataArr = [];
for (var i=0; i<IframeData.length; i++) 
{ 
	console.log('Iframe Data : ', IframeData[i])
	console.log('', IframeData[i].getElementsByTagName("video"))
	var name = IframeData[i].getAttributeNames();
	var property = IframeData[i].getAttribute("property");
	var httpequiv = IframeData[i].getAttribute("http-equiv");
	var offsetHeight = IframeData[i].getAttribute("height");
	var offsetWidth = IframeData[i].getAttribute("width");
	
	IframeDataArr.push([name, property, httpequiv, offsetHeight, offsetWidth]);
} 

chrome.runtime.sendMessage({
	method:"getIframeData",
	IframeData:IframeDataArr
});