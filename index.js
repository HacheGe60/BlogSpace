let postsArray = [];
const newPostForm = document.querySelector('#new-post');
const titleInput = document.querySelector('#post-title');
const bodyInput = document.querySelector('#post-body');

function renderPosts() {
    let postHtml = '';
    postsArray.forEach(post => {
        postHtml += `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            <hr>
             `;
    });
    document.querySelector('#blog-list').innerHTML = postHtml;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    });

newPostForm.addEventListener('submit', e => {
    e.preventDefault();
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;
    const data = {
        title: postTitle,
        body: postBody,
    };
    fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then(response => response.json())
        .then(data => {
            postsArray.unshift(data);
            newPostForm.reset();
            renderPosts();
        });
});
