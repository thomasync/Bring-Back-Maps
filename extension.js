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

	function addMapsToTabs(tabs, address, legacy) {
		if (!legacy) {
			const mapsTab = document.createElement('a');
			mapsTab.innerHTML = `
					<div jsname="bVqjv" class="GKS7s">
						<span class="FMKtTb UqcIvb" jsname="pIvPIe">Maps</span>
					</div>
				`;
			mapsTab.className = 'nPDzT T3FoJb';
			mapsTab.href = address;
			tabs.insertBefore(mapsTab, tabs.firstChild);
		} else {
			const mapsTab = document.createElement('div');
			mapsTab.innerHTML = `
					<a class="nPDzT T3FoJb" jsname="VIftV" role="link">
						<div jsname="bVqjv" class="YmvwI">Maps</div>
					</a>
				`;
			mapsTab.firstElementChild.href = address;
			tabs.insertBefore(mapsTab, tabs.children[1]);
		}
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
		let legacy = false;
		let tabs = document.querySelector('.IUOThf');

		if (!tabs) {
			// Some of the Google domains use old UI
			tabs = document.querySelector('.crJ18e');

			if (!tabs) {
				return
			}

			legacy = true;
		}

		const search = document.querySelector('textarea.gLFyf');
		const map = document.querySelector('.Ggdpnf');
		const address = document.querySelector('.gqkR3b a');
		const largeMap = document.querySelector('.o8ebK');

		if (map && address) {
			addHyperLinkMap(map, address);
			addMapsToTabs(tabs, address.href, legacy);
			loaded = true;
		} else if (largeMap && search) {
			addHyperLinkLargeMap(largeMap, search);
			addMapsToTabs(tabs, formatSearchLink(search.value), legacy);
			loaded = true;
		}
	}

	waitLoaded();
})();
