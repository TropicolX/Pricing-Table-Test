const toggleDivs = document.querySelectorAll(".toggle");

toggleDivs.forEach((item) => {
	item.addEventListener("click", (event) => {
		const keyName = item.closest("tr").id;
		const dropdown = item.closest("tr").parentElement.parentElement.querySelector(`.${keyName}`);
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
