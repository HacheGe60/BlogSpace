

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
        document.querySelector('#container').innerHTML = postHtml;
    });

