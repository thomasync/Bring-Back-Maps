!(() => {
	let isMapsSearch = false;

	function addHyperLinkMap(map, adress) {
		if (map && adress) {
			map.style.cursor = 'pointer';
			map.addEventListener('click', () => {
				window.location.href = adress.href;
			});
		}
	}

	function addMapsToTabs(tabs, adress) {
		if (isMapsSearch) {
			const mapsTab = document.createElement('a');
			mapsTab.innerHTML = `
				<div jsname="bVqjv" class="GKS7s">
					<span class="FMKtTb UqcIvb" jsname="pIvPIe">Maps</span>
				</div>
			`;
			mapsTab.className = 'nPDzT T3FoJb';
			mapsTab.href = adress.href;

			// prepend to the tabs
			tabs.insertBefore(mapsTab, tabs.firstChild);
		}
	}

	function app() {
		const tabs = document.querySelector('.IUOThf');
		const map = document.querySelector('.Ggdpnf');
		const adress = document.querySelector('.gqkR3b a');

		if (map && adress) {
			isMapsSearch = true;
		}

		addHyperLinkMap(map, adress);
		addMapsToTabs(tabs, adress);
	}

	window.addEventListener('load', app);
})();
