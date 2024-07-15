function MakeUpdateQtyButtonVisible(id, visible) {
    const updateQtyButton = document.querySelector("button[data-itemId='" + id + "']")

    visible ? updateQtyButton.style.display = "inline-block" : updateQtyButton.style.display = "none"
}