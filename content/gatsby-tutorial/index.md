---
title: gatsby tutorial 중 메모
date: '2022-03-28'
author: keenager
categories: gatsby featured
---


## Gatsby's File System Route API
---
### Create new routes dynamically with Gatsby’s File System Route API [link](https://www.gatsbyjs.com/docs/tutorial/part-6/#create-new-routes-dynamically-with-gatsbys-file-system-route-api)
According to the API, you need to decide on two things before creating a collection route:

- Which type of node to create pages from.
- Which field from that node type to use in the URL.

`gatsby-plugin-mdx` automatically adds a `slug` field to each MDX node, which contains a string of the filename for the `.mdx` file (with the `.mdx` extension removed)(다만 `index.mdx`일 경우 index가 아니라 소속 폴더 이름으로 설정되는 듯). You can see the `slug` field’s value for each MDX node in GraphiQL. If you run the following query:  

### Render post contents in the blog post page template  [link](https://www.gatsbyjs.com/docs/tutorial/part-6/#render-post-contents-in-the-blog-post-page-template)

#### Key GraphQL Concept: Query Variables
To use the query variable inside your query, do the following:

1. **Define your query variable.** It should include the variable name (with a $ in front of it) and its GraphQL data type.
1. **Use the query variable in your query.** (You’ll need to add a $ before the variable name.)

When you use Gatsby’s File System Route API, it automatically adds some props into the page template component for each page:

- The id for the data layer node used to create the page.
- The field you used to create the dynamic part of the route. (In this case, the slug field.)

Under the hood, Gatsby makes both of these values available to use as query variables in your page queries.

```js
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    body
  }
}
```

pages/blog를 단순화하고 blog/주제/index.mdx 로 바꿔보자...  
다만 index.mdx에서 graphql 방법을 찾아야...  그래야 해당 주제 글 리스트를 보여줄 수 있음.  
mdx.slug.js에서는 삼항 연산자 사용하여 category에 따라 다르게 출력


---
마지막 수정일(`modifiedTime`)을 추가하기 위해 수정한 파일\
graphql 관련
- `/src/components/page-header/index.js`
- `/src/templates/blog-template.js`
- `/src/pages/index.js`
Post 클래스 관련
- `/src/models/post.js`


```toc 

```