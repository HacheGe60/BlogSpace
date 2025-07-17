let postsArray = [];

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

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const postTitle = document.querySelector('#post-title').value;
    const postBody = document.querySelector('#post-body').value;
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
            renderPosts();
        });
    data.title.value = '';
    data.body.value = '';
});
