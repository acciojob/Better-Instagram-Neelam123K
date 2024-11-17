//your code here
const gridItems = document.querySelectorAll('.grid-item');

let draggedElement = null;
let draggedElementPosition = null;

// Add event listeners for drag-and-drop
gridItems.forEach((item, index) => {
    item.dataset.position = index;

    item.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        draggedElementPosition = e.target.dataset.position;
        e.target.style.opacity = '0.5';
    });

    item.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
        draggedElement = null;
        draggedElementPosition = null;
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    item.addEventListener('dragenter', (e) => {
        e.preventDefault(); 
        e.target.style.border = '2px dashed #007bff';
    });

    item.addEventListener('dragleave', (e) => {
        e.target.style.border = '2px solid #ddd';
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();

        if (draggedElement && draggedElement !== e.target) {
            const draggedImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = draggedImage;

            const tempPosition = draggedElement.dataset.position;
            draggedElement.dataset.position = e.target.dataset.position;
            e.target.dataset.position = tempPosition;
        }

        e.target.style.border = '2px solid #ddd'; 
});

