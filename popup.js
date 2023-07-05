function getIframeData() {
	var message = document.querySelector('#IframeTable');
	chrome.tabs.executeScript(null, {
		file: "getIframeData.js"
	}, function() {
		// If you try it into an extensions page or the webstore/NTP you'll get an error
		if (chrome.runtime.lastError) {
			message.innerText = 'There was an error : \n' + chrome.runtime.lastError.message;
		}
	});
}

chrome.runtime.onMessage.addListener(function(request, sender) {
	var IframeTable = document.getElementById('IframeTable');
	if (request.method == "getIframeData") {
		for (var i=0; i<request.IframeData.length; i++) { 
			IframeTable.innerHTML += "<tr><td>"+request.IframeData[i][0]+"</td><td>"+request.IframeData[i][1]+"</td><td>"+request.IframeData[i][2]+"</td><td>"+request.IframeData[i][3]+"</td><td>"+request.IframeData[i][4]+"</td></tr>"; 
		} 
	}
});

window.onload = getIframeData;