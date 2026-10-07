const ICON_SIZE = 32; // In pixels

window.addEventListener('load', init);

async function init() {
	const topSites = await browser.topSites.get(),
		topSitesList = document.getElementById('top-sites');
	
	for (let topSite of topSites) {
		let topSiteItem = document.createElement('li'),
			iconURL = new URL(browser.runtime.getURL('/_favicon/'));
		
		iconURL.searchParams.set('pageUrl', topSite.url);
		iconURL.searchParams.set('size', Math.round(ICON_SIZE * window.devicePixelRatio));

		topSiteItem.innerHTML = `
			<a href="${topSite.url}">
				<img src="${iconURL}" alt="" />
				<span>${topSite.title}</span>
			</a>
		`;
		topSitesList.appendChild(topSiteItem);
	}
}
