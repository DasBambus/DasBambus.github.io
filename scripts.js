document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const blogPostsSection = document.getElementById('blog-posts');
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
