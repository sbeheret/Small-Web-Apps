const addForm = document.querySelector('.add');
const ul = document.querySelector('ul');
const searchForm = document.querySelector('.search');

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span><i class="far fa-trash-alt delete"></i>
        </li>`
        addForm.reset();
    }
});

ul.addEventListener('click', e => {
    if (e.target.nodeName === 'I'){
        e.target.parentElement.remove();
    }
});

searchForm.addEventListener('keyup', e => {
    const html = Array.from(ul.children);
    html.forEach(li => {
        if (!li.textContent.includes(e.target.value.trim())){
            li.classList.add('hide');
        }
        else if (li.textContent.includes(e.target.value.trim())){
            li.classList.remove('hide');
        }
    })
});