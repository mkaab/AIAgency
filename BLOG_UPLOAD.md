# How to Add a New Blog Post

Adding a blog post to AltaServ is simple. You just need to add the text to a data file and drop your image in a folder.

## Step 1: Add your Image
1.  Save your blog thumbnail image (recommended size: **800x600px** or similar landscape ratio).
2.  Rename it to something simple, e.g., `my-new-post.jpg`.
3.  Place the file in: `public/img/blog/`

## Step 2: Add the Post Content
1.  Open this file: `src/data/blogs.js`
2.  You will see a list of blog posts. Copy the format of the last one and add a new entry at the top or bottom.

**Template:**
```javascript
  {
    id: 5, // Unique number
    slug: "my-new-post-title", // This will be the URL (e.g., /blog/my-new-post-title)
    title: "My New Post Title",
    date: "Dec 15, 2025",
    category: "Strategy", // e.g., Strategy, Technical, Growth
    excerpt: "A short summary that appears on the blog card...",
    image: "/img/blog/my-new-post.jpg", // The path to your image
    content: `
      <p>This is the first paragraph of your blog post.</p>
      
      <h3>This is a Subheading</h3>
      <p>This is another paragraph. You can write as much as you want here.</p>
      
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>
    `
  },
```

## Step 3: Publish
1.  Save the file.
2.  If the dev server is running, the new post will appear immediately at `http://localhost:5173/blog`.

## Tips
*   **Slug**: Use hyphens instead of spaces (e.g., `the-future-of-ai`, not `The Future of Ai`).
*   **Content**: You can use standard HTML tags like `<p>`, `<h3>`, `<ul>`, `<li>`, `<strong>`.
*   **Order**: The order in the file determines the order on the website. Put the newest one first if you want it at the top.
