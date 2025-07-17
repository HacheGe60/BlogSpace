fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        let postHtml = '';
        // console.log(postsArr);
        postsArr.forEach(post => {
            // console.log(post);
            // console.log(post.title);
            postHtml += `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            <hr>
             `;
        });
        document.querySelector('#blog-list').innerHTML = postHtml;
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
            console.log(data);

            postHtml = `
        <h2 class="post-title">${data.title}</h2>
        <p class="post-body">${data.body}</p>
        <hr>
         `;
            document.querySelector('#blog-list').innerHTML = postHtml + document.querySelector('#blog-list').innerHTML;
        });
    data.title.value = '';
    data.body.value = '';
});
