const tabItems = document.querySelectorAll(".tab-item")
const tabContentItems = document.querySelectorAll(".tab-content-item")

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem))

// Remove the border
function removeBorder() {
    tabItems.forEach((item) => item.classList.remove("border-bottom"))
}

// Remove class d-block to show items content
function addDNone() {
    tabContentItems.forEach((item) => item.classList.add("d-none"))
}

//Select tab content item
function selectItem(e) {
    addDNone()
    removeBorder()
    // Add border to current tab
    this.classList.add("border-bottom")

    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.remove("d-none")
}
