let elems;
document.addEventListener('DOMContentLoaded', function() {
	elems = Array.from(document.querySelectorAll('div')).filter(el => el.childElementCount === 0);
	updateElems();
	window.addEventListener('resize', updateElems);
});
function updateElems() {
	elems.forEach(el => {
		el.innerText = '-';
		el.classList.remove('element-info');
		el.innerText = `${el.className} (${el.offsetWidth} x ${el.offsetHeight})`;
		el.classList.add('element-info');
	});
}
