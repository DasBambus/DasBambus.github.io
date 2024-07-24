document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const blogPostsSection = document.getElementById('blog-posts');
    const searchInput = document.getElementById('search');
    const projects = [
        { title: "Projekt 1", description: "Beschreibung des Projekts 1" },
        { title: "Projekt 2", description: "Beschreibung des Projekts 2" },
    ];

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        addBlogPost(title, content);

        postForm.reset();
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const blogPosts = document.querySelectorAll('.blog-post');
        
        blogPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
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

    function displayProjects() {
        const projectList = document.getElementById('project-list');
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.title;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;

            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);

            projectList.appendChild(projectDiv);
        });
    }

    displayProjects();
});
