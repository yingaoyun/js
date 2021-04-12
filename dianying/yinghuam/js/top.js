function desc(a, b, c) {
				if (c.className.indexOf('_on') == -1) {
					if (a == 0) {
						document.getElementById('desc_' + b).className = 'desc';
						c.className = 'asc asc_on';
					} else {
						document.getElementById('asc_' + b).className = 'asc';
						c.className = 'desc desc_on';
					}
					document.getElementById('play_' + b).innerHTML = '<ul class="mvlist"'+(b=="999"?"":"")+'>' + document.getElementById('play_' + b).getElementsByTagName('ul')[0].innerHTML.toLowerCase().split('</li>').reverse().join('</li>').substring(5) + '</ul>';
				}
}