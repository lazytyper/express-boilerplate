export default function ajax(url, method, data) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve(JSON.parse(xhr.response));
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function() {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send(JSON.stringify(data));
	});
};

// Path: public/js/ajax.js
