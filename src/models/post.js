export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields, parent } = node;
    const { slug } = fields;
    const { emoji, categories, title, author, date } = frontmatter;
    const { modifiedTime } = parent;

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.author = author;
    this.date = date;
    this.modifiedTime = modifiedTime;
    this.categories = categories.split(' ');
  }
}
