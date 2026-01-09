# How to Add Blog Posts

This guide explains how to add new blog posts to your portfolio site.

## Adding a New Blog Post

1. Open the file `/src/data/blogs.json`

2. Add a new blog object to the array with the following structure:

```json
{
  "id": "unique-id",
  "title": "Your Blog Post Title",
  "excerpt": "A brief summary of your blog post (2-3 sentences)",
  "date": "YYYY-MM-DD",
  "author": "Jake Dennison",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "content": "The full content of your blog post.\n\nUse \\n\\n for paragraph breaks.\n\nYou can write multiple paragraphs this way."
}
```

### Field Descriptions:

- **id**: A unique identifier (use sequential numbers: "1", "2", "3", etc.)
- **title**: The title of your blog post
- **excerpt**: A short preview shown on the blog cards (keep it under 150 characters)
- **date**: Publication date in YYYY-MM-DD format
- **author**: Your name
- **tags**: Array of relevant tags/categories (used for filtering)
- **content**: The full blog post content
  - Use `\n\n` to create paragraph breaks
  - Keep formatting simple (no HTML/Markdown)
  - Each paragraph will be rendered separately

### Example:

```json
{
  "id": "3",
  "title": "Integrating AI into Business Workflows",
  "excerpt": "Exploring practical ways to leverage OpenAI and Azure AI services for business automation.",
  "date": "2026-01-10",
  "author": "Jake Dennison",
  "tags": ["AI", "OpenAI", "Azure", "Automation"],
  "content": "Artificial Intelligence is transforming how businesses operate. In this post, I'll share practical approaches to integrating AI services into your existing workflows.\n\n**Getting Started with OpenAI**\n\nOpenAI's GPT models can be integrated into various business processes, from customer support to content generation.\n\n**Azure AI Services**\n\nMicrosoft Azure provides a comprehensive suite of AI tools that can be seamlessly integrated with other Microsoft services.\n\n**Best Practices:**\n\n1. Start with a clear use case\n2. Test thoroughly before production deployment\n3. Monitor costs and usage\n4. Ensure data privacy and compliance\n\nThe key to successful AI integration is starting small and scaling based on proven results."
}
```

## Tips:

1. **Keep IDs Sequential**: Use "1", "2", "3", etc. for easy tracking
2. **Use Descriptive Tags**: Tags help users filter posts (e.g., "Microsoft 365", "Salesforce", "Automation")
3. **Write Clear Excerpts**: This is what users see first - make it compelling
4. **Format Content Properly**: Use `\n\n` between paragraphs for proper spacing
5. **Check Dates**: Use the correct YYYY-MM-DD format

## Blog Features:

- **Search**: Users can search by title or excerpt
- **Tag Filtering**: Users can filter by tags
- **Responsive Design**: Works on all devices
- **Neobrutalist Theme**: Matches your site's design
- **Dark Mode**: Automatically adapts to theme

## Where Posts Appear:

- Posts appear in the **Blogs** section of your site
- Accessible via navigation menu (#blogs)
- Newest posts appear first (sorted by date)
- Clicking a post opens the full content view
