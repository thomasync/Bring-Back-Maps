!(() => {
	function addHyperLinkMap(map, adress) {
		if (map && adress) {
			map.style.cursor = 'pointer';
			map.addEventListener('click', () => {
				window.location.href = adress.href;
			});
		}
	}

	function addHyperLinkLargeMap(map, search) {
		if (map && search) {
			map.style.cursor = 'pointer';
			map.addEventListener('click', () => {
				window.location.href = formatSearchLink(search.value);
			});
		}
	}

	function addMapsToTabs(tabs, adress) {
		const mapsTab = document.createElement('a');
		mapsTab.innerHTML = `
				<div jsname="bVqjv" class="GKS7s">
					<span class="FMKtTb UqcIvb" jsname="pIvPIe">Maps</span>
				</div>
			`;
		mapsTab.className = 'nPDzT T3FoJb';
		mapsTab.href = adress;

		// prepend to the tabs
		tabs.insertBefore(mapsTab, tabs.firstChild);
	}

	function formatSearchLink(search) {
		search = encodeURIComponent(search);
		return `https://www.google.com/maps/search/${search}`;
	}

	function app() {
		const search = document.querySelector('textarea.gLFyf');
		const tabs = document.querySelector('.IUOThf');
		const map = document.querySelector('.Ggdpnf');
		const adress = document.querySelector('.gqkR3b a');
		const largeMap = document.querySelector('.o8ebK');

		if (!tabs) {
			return;
		}

		if (map && adress) {
			addHyperLinkMap(map, adress);
			addMapsToTabs(tabs, adress.href);
		} else if (largeMap && search) {
			addHyperLinkLargeMap(largeMap, search);
			addMapsToTabs(tabs, formatSearchLink(search.value));
		}
	}

	window.addEventListener('load', app);
})();
