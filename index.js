var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: "https://navigator.gmx.net/remindlogout?*",
	    contentScript: "document.getElementsByClassName('button cta large')[0].click();"
});
