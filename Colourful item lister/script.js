function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const itemList = document.getElementById('itemList');
        const newItem = document.createElement('li');

        const itemTextNode = document.createElement('span');
        itemTextNode.textContent = itemText;

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.onclick = () => editItem(newItem, itemTextNode);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteItem(newItem);

        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        newItem.appendChild(itemTextNode);
        newItem.appendChild(buttonGroup);

        itemList.appendChild(newItem);

        itemInput.value = '';
        itemInput.focus();
    }
}

function editItem(item, itemTextNode) {
    const newText = prompt('Edit item:', itemTextNode.textContent);
    if (newText !== null) {
        itemTextNode.textContent = newText.trim();
    }
}

function deleteItem(item) {
    item.remove();
}