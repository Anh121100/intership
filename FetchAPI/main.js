const postslist = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');
const btnSubmit = document.querySelector('.btn-submit');
let output = '';

const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
          <div class="card mt-4 col-md-6 bg-ligt">
              <div class="card-body" data-id=${post.id}>
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body} </p>
                  <a href="#" class="card-link" id="edit-post">Edit</a>
                  <a href="#" class="card-link" id="delete-post">Delete</a>
              </div>
          </div>
        `;
    });
    postslist.innerHTML = output;
} ;
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => response.json())
  .then(data => renderPosts(data))

postslist.addEventListener('click', (e) => {
    e.preventDefault();
    let deleteButtonIsPressed = e.target.id == 'delete-post';
    let editButtonIsPressed = e.target.id == 'edit-post';

    let id = e.target.parentElement.dataset.id;

    //Delete
    if(deleteButtonIsPressed){
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => location.reload())
    }

    //Edit
    if(editButtonIsPressed){
        const parent = e.target.parentElement;
        let titleContent = parent.querySelector('.card-title').textContent;
        let bodyContent = parent.querySelector('.card-text').textContent;
        
        titleValue.value = titleContent;
        bodyValue.value = bodyContent;
    }

    //Update
    btnSubmit.addEventListener('click', (e) => {
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: titleValue.value,
                body: bodyValue.value,
            })
        })
        .then(response => response.json())
        .then(() => location.reload())
    })
})

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleValue.value,
            body: bodyValue.value
        })
    })
    .then(response => response.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderPosts(dataArr);
    });
})