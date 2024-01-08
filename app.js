// app.js


const notes = [

]

let titles = notes.map((note) => note.title);



/* function renderNotes(notes) {
    document.querySelector('notes').
} */

/* function renderNotes() {
        document.querySelector('.notes').innerHTML = (idNum, title, content);
}

renderNotes(); */

let notes_ster = JSON.stringify(notes)


localStorage.setItem('notes', notes_ster);
console.log(notes_ster);

let card = document.querySelector('.card');
let container = document.querySelector('.notes');

function newNote() {
    notes.push({
        title: 'New Note',
        content: 'New Note Content'
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    renderNotes();
    console.log(notes);

}





function renderNotes () {
    container.innerHTML = '';
    
    if (notes.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No notes available.';
        container.appendChild(message);
    } else {
        notes.forEach((note) => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            const title = document.createElement('h2');
            title.textContent = note.title;
            title.contentEditable = true; // Make h2 editable
            
            const content = document.createElement('p');
            content.textContent = note.content;
            content.contentEditable = true; // Make p editable

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                const index = notes.indexOf(note);
                notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(notes));
                renderNotes();
            })
            
            card.appendChild(title);
            card.appendChild(content);
            card.appendChild(deleteButton);
            
            container.appendChild(card);
        });
    }
}

renderNotes();

function saveToLocalStorage( ) {
    

}
