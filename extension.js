!(() => {
	let loaded = false;
	let load_timeout = 2000;

	function addHyperLinkMap(map, address) {
		if (map && address) {
			map.style.cursor = 'pointer';
			map.addEventListener('click', () => {
				window.location.href = address.href;
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

	function addMapsToTabs(tabs, address) {
		const mapsTab = document.createElement('a');
		mapsTab.innerHTML = `
				<div jsname="bVqjv" class="GKS7s">
					<span class="FMKtTb UqcIvb" jsname="pIvPIe">Maps</span>
				</div>
			`;
		mapsTab.className = 'nPDzT T3FoJb';
		mapsTab.href = address;
		tabs.insertBefore(mapsTab, tabs.firstChild);
	}

	function formatSearchLink(search) {
		search = encodeURIComponent(search);
		return `https://www.google.com/maps/search/${search}`;
	}

	function waitLoaded() {
		if (loaded) {
			return;
		}

		if (load_timeout <= 0) {
			return;
		}

		app();

		load_timeout -= 100;
		setTimeout(waitLoaded, 100);
	}

	function app() {
		const search = document.querySelector('textarea.gLFyf');
		const tabs = document.querySelector('.IUOThf');
		const map = document.querySelector('.Ggdpnf');
		const address = document.querySelector('.gqkR3b a');
		const largeMap = document.querySelector('.o8ebK');

		if (!tabs) {
			return;
		}

		if (map && address) {
			addHyperLinkMap(map, address);
			addMapsToTabs(tabs, address.href);
			loaded = true;
		} else if (largeMap && search) {
			addHyperLinkLargeMap(largeMap, search);
			addMapsToTabs(tabs, formatSearchLink(search.value));
			loaded = true;
		}
	}

	waitLoaded();
})();
