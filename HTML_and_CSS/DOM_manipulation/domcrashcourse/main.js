var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit Event
form.addEventListener('submit', addItems);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItems(e) {
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;
    // create li element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // console.log(li);
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);

    // create del button
    var deleteBtn = document.createElement("button");

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert to lower case
    var text = e.target.value.toLowerCase();
    // Get Items
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item) {
        // convert to item list
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });

}