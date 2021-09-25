const main = document.querySelector(".main");
const table = document.querySelector(".price-table.desktop");
const basic = table.cloneNode(true);
const business = table.cloneNode(true);
const pro = table.cloneNode(true);

// Create Basic table for Mobile
basic.classList.remove("desktop");
basic.classList.add("basic");
basic.children[0].children[0].remove();
const trElements1 = basic.querySelectorAll("tr");
const callToAction1 = basic.querySelectorAll(".call-to-action");

for (i = 0; i < trElements1.length; i++) {
	trElements1[i].children[2].remove();
	trElements1[i].children[2].remove();
}
for (i = 0; i < callToAction1.length; i++) {
	callToAction1[i].children[0].remove();
	callToAction1[i].children[0].setAttribute("colspan", "2");
}

// Create Business table for Mobile
business.classList.remove("desktop");
business.classList.add("business");
const trElements2 = business.querySelectorAll("tr");
const callToAction2 = business.querySelectorAll(".call-to-action");

for (i = 0; i < trElements2.length; i++) {
	trElements2[i].children[1].remove();
	trElements2[i].children[2].remove();
}

const bestValue = business.querySelector("#best-value");
bestValue.children[0].remove();
bestValue.children[0].setAttribute("colspan", "2");

for (i = 0; i < callToAction2.length; i++) {
	callToAction2[i].children[0].remove();
	callToAction2[i].children[0].setAttribute("colspan", "2");
}

// Create Pro table for Mobile
pro.classList.remove("desktop");
pro.classList.add("pro");
pro.children[0].children[0].remove();
const trElements3 = pro.querySelectorAll("tr");
const callToAction3 = pro.querySelectorAll(".call-to-action");

for (i = 0; i < trElements3.length; i++) {
	trElements3[i].children[1].remove();
	trElements3[i].children[1].remove();
}
for (i = 0; i < callToAction3.length; i++) {
	callToAction3[i].children[0].remove();
	callToAction3[i].children[0].setAttribute("colspan", "2");
}

// Add tables to main section
console.log(basic);
console.log(business);
main.appendChild(basic);
main.appendChild(business);
main.appendChild(pro);

// Dropdown functionality
const toggleDivs = document.querySelectorAll(".toggle");

toggleDivs.forEach((item) => {
	item.addEventListener("click", (event) => {
		const keyName = item.closest("tr").id;
		const dropdown = item
			.closest("tr")
			.parentElement.parentElement.querySelector(`.${keyName}`);
		dropdown.classList.toggle("hide");
		const toggleIcon = item.closest("tr").querySelector(".arrow-up");
		toggleIcon.classList.toggle("rotate");
	});
});

/* TO HIDE ELEMENT WHENEVER YOU CLICK OUTSIDE THE ELEMENT
window.addEventListener("click", (e) => {
    if (e.target !== toggleDivs[0]) {
        toggleDivs[0].classList.add("hide")
    }
})
*/
