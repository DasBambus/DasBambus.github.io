document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const blogPostsSection = document.getElementById('blog-posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        addBlogPost(title, content);

        postForm.reset();
    });

    function addBlogPost(title, content) {
        const post = document.createElement('div');
        post.className = 'blog-post';

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);

        blogPostsSection.appendChild(post);
    }
});
