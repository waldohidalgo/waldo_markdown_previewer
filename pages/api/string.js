const cadenaInicial = `
# Waldo's React Markdown Previewer!


# This is a H1 heading
## This is a H2 heading.
### And this is a H3 heading

**This is a bold text**

*This is an italic text*

**_This is bold and italic text_**

>This is a blockquote

~~This is a strikethrough.~~

My parser too supports some emojis :tada: :

-That is so funny! :joy:  
-That is so cool! :tada:
-Go to space!: :rocket:

This is a link to emoji github code: [Github emoji code](https://gist.github.com/rxaviers/7360908)

This is a ordered list:

1. First item

2. Second item

3. Third item

This is an unordered list:

- First item

- Second item

- Third item

This is a inline code: \`<p>Hello</p>\`, between 2 backticks.

That are some code blocks:

#### Javascript

\`\`\`js
document.getElementById("demo").innerHTML = 'John Doe';
\`\`\`

#### HTML

\`\`\`html
<h1>Hello World!</h1>
\`\`\`

#### CSS

\`\`\`css
.titulo{
   color: red;
   text-align: center;
}
\`\`\`

#### Handlebars

\`\`\`hbs
{{> Header}}
\`\`\`

#### Python 

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
\`\`\`

#### JSX

\`\`\`jsx
const element = <a href="https://www.reactjs.org"> link </a>;
\`\`\`

#### Java

\`\`\`java
class HelloWorld {
   public static void main(String args[])
   {
       System.out.println("Hello, World");
   }
}
\`\`\`

#### SQL

\`\`\`sql
SELECT * FROM helloworld WHERE phrase = "Hello, World!";
\`\`\`


This is a link: [Next.js Documentation](https://nextjs.org/docs)



And if you want to get really crazy, even tables:

Name | Last Name | Age
------------ | ------------- | -------------
Waldo | Hidalgo | 34
John | Doe | 32
Jane | Doe | 28

And if you want to add a task list:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

![Nextjs Logo](https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png)

`;

export default cadenaInicial;
