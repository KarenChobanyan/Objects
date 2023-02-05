
//Փորձել եմ դիտարկել ծրագրաորման կառուցվածքը՝ մասնավորապես  HTML-ը և նրա Tag-երը

"use strict"
function makeWebSite(html, css, js) {
    return {
        html: {},
        css: {},
         js: {},
    }
};
let webSite = makeWebSite();
function makeHtml(name, used, construction) {
    return {
        name, 
        used, 
        construction: [],
    }
};
let html = makeHtml("HyperText Markup Language","describing the structure of Web pages");
for (let key in html) {
    webSite.html[key] = html[key]};
let css = makeHtml(`Cascading Style Sheets`,`describing the presentation of Web pages, including colors,layout, and fonts`);
for(let key in css){
    webSite.css[key]= css[key]
};
let js = makeHtml(`Java Script`,`to create dynamic and interactive web content like applications and browsers. `);
for(let key in js){
    webSite.js[key] = js[key]
};

function makeHtmlConstruction(html, head, body) {
    return {
        tagHtml: {},
        tagHead: {},
        tagBody: {}
    }
}
let construction = makeHtmlConstruction();
for (let key in construction) {
    webSite.html.construction[key] = construction[key]
}
function makeTagHtml(describtion, writingType, tagsIn,) {
    return {
        describtion,
        writingType,
        tagsIn: [{}],
    }
};

let mainTags = makeTagHtml();
for (let key in mainTags) {
    webSite.html.construction.tagHtml[key] = mainTags[key];
};
let mainHead = makeTagHtml();

for (let key in mainHead) {
    webSite.html.construction.tagHead[key] = mainHead[key]
};

let mainBody = makeTagHtml();
for (let key in mainBody) {
    webSite.html.construction.tagBody[key] = mainBody[key]
}


function makeTagsIn(title, writingType, describtion) {
    return {
        title,
        writingType,
        describtion,
        functions: [{}]
    }
}


//The tags in H tml>

webSite.html.construction.tagHtml['describtion'] = `The <HTML> and </HTML> tags must appear 
on a separate line. You cannot have anything else on that line 
and, in particular, you cannot mix keyword definitions with HTML data.","<HTML></HTML>`;
webSite.html.construction.tagHtml['writingType'] = `<html></html>`;
webSite.html.construction.tagHtml.tagsIn[0] = makeTagsIn(`Body`, `<body>,</body>`, `The <body> element contains all the contents of an HTML document.`);
webSite.html.construction.tagHtml.tagsIn[1] = makeTagsIn(`Head`, `<head>,</head>`, `HTML - The Head Element`);

//The tags in head

function examples(example_1, example_2, example_3, example_4, example_5, example_6,) {
    return {
        example_1, 
        example_2, 
        example_3, 
        example_4, 
        example_5, 
        example_6, 
    }
};


webSite.html.construction.tagHead[`describtion`] = `HTML - The Head Element`;
webSite.html.construction.tagHead[`writingType`] = `<head></head>`;
webSite.html.construction.tagHead.tagsIn[0] = makeTagsIn(`Title`, `<title>,</title>`, `The <title> element defines 
the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.`);
webSite.html.construction.tagHead.tagsIn[1] = makeTagsIn(`Style`, `<style></style>`, `The <style> element is used to define style information for a single HTML page:`)
webSite.html.construction.tagHead.tagsIn[2] = makeTagsIn(`Link`, `<link rel="stylesheet" href="file.css">`, `The <link> element defines the relationship between the current document and an external resource.
The <link> tag is most often used to link to external style sheets:`)
webSite.html.construction.tagHead.tagsIn[3] = makeTagsIn(`Meta`, `,meta>`, `The <meta> element is typically used to specify the character set,
 page description, keywords, author of the document, and viewport settings.`);
let headMetaTagFunctioins = examples(`Define the character set used: <meta charset="UTF-8">`,
    `Define keywords for search engines: <meta name="keywords" content="HTML, CSS, JavaScript">`,
    `Define a description of your web page: <meta name="description" content="Free Web tutorials">`,
    `Define the author of a page: <meta name="author" content="Karen">`,
    `Refresh document every 30 seconds: <meta http-equiv="refresh" content="30">`,
    `Setting the viewport to make your website look good on all devices: <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
);
for (let key in headMetaTagFunctioins) {
    webSite.html.construction.tagHead.tagsIn[3].functions[key] = headMetaTagFunctioins[key];

};
webSite.html.construction.tagHead.tagsIn[4] = makeTagsIn(`Script`, `<script></script>`, `The <script> element is used to define client-side JavaScripts.`)
webSite.html.construction.tagHead.tagsIn[5] = makeTagsIn(`Base`, `<base>`, `The <base> element specifies the base URL and/or target for all re'ative URLs in a page.`)
let headBasetagFunction = examples(`Specify a default URL and a default target for all links on a page:  <base href='https://www.w3schools.com/' target='_blank'>`,
    `There can only be one single <base> element in a document!`,
    `The <base> tag must have either an href or a target attribute present, or both.`)
for (let key in headBasetagFunction) {
    webSite.html.construction.tagHead.tagsIn[5].functions[key] = headBasetagFunction[key]
}



//Tags in Body

webSite.html.construction.tagBody['describtion'] = `The <body> tag defines the document's body.`;
webSite.html.construction.tagBody['writingType'] = `<body></body`;
function makeBodyTags(title, writingType, type, describtion, functions,) {
    return {
        title,
        writingType,
        type,
        describtion,
        functions: [{}],
    }
};

webSite.html.construction.tagBody.tagsIn[0] = makeBodyTags(`Paragraph Tag`, `<p></p>`, `Block-level`, "A paragraph tag <p> is used to define a paragraph on a web page",);
let bodyParagraphFunction = examples(`<p>Hello World</p>`);
for (let key in bodyParagraphFunction) {
    webSite.html.construction.tagBody.tagsIn[0].functions[key] = bodyParagraphFunction[key];
};
webSite.html.construction.tagBody.tagsIn[1] = makeBodyTags(`Heading Tag`, `<h1,h2,h3,h4,h5,h6></h1,h2,h3,h4,h5,h6>`, `Block-level`, `The HTML heading tag is used to define the heading of
 the HTML document. The <h1> tag defines the most important tag, and <h6> defines  the least.`);
let bodyHeadinTags = examples(`<h1>Thos is a heading</h1>`, `<h2>Thos is a heading</h2>`, `<h3>Thos is a heading</h3>`,
    `<h4>Thos is a heading</h4>`, `<h5>Thos is a heading</h5>`, `<h6>Thos is a heading</h6>`);
for (let key in bodyHeadinTags) {
    webSite.html.construction.tagBody.tagsIn[1].functions[key] = bodyHeadinTags[key]
};
webSite.html.construction.tagBody.tagsIn[2] = makeBodyTags(`Formatting Tags`, `<em,b,i,u></em,b,i,u>`, `Inline element`, `HTML Formatting is a process that allows us to format text to increase its visual appeal.`,);
let bodyFormatTags = examples(`Emphasis tag: The HTML <em> tag is used to emphasize the particular text in a paragraph`, `Bold Tag: The <b> tag is used to make the text bold.`,
    `Italic Tag:  The <i> tag is used to make the text italic.`, `Underline Tag:  The <u> tag is used to set the text underline.`);
for (let key in bodyFormatTags) {
    webSite.html.construction.tagBody.tagsIn[2].functions[key] = bodyFormatTags[key]
};
webSite.html.construction.tagBody.tagsIn[3] = makeBodyTags(`Link Tag`, `<a></a`, `Inline element`, `The <a> tag links one page to another page. The href attribute is used to define `,);
let bodyLinkTag = examples(`<a href = "https://www.youtube.com/" This is the link to Youtube website </a>`, `<a href = "https://www.google.com/" This is the link to Google website </a>`,
    `<a href = "https://www.facebook.com/" This is the link to Facebook website </a>`, `<a href = "https://www.github.com/" This is the link to Gittube website </a>`);
for (let key in bodyLinkTag) {
    webSite.html.construction.tagBody.tagsIn[3].functions[key] = bodyLinkTag[key]
};
webSite.html.construction.tagBody.tagsIn[4] = makeBodyTags(`List tag`, `<ol,ul></ol,ul>`, `Block-level`, `The <li> tag is used if you want to enter the contents in the 
listed order. There are two types of lists:<ol> for ordered lists and <ul. for unordered lists`,);
let bodyListTag = examples(`Ordered list <ol>: <ol> <li> HTML </li> </ol>`, `Unordered list <ul>: <ul> <li> HTML </li> </ul>`);
for (let key in bodyListTag) {
    webSite.html.construction.tagBody.tagsIn[4].functions[key] = bodyListTag[key]
};
webSite.html.construction.tagBody.tagsIn[5] = makeBodyTags(`Image Tag`, `<img>`, `Inline element`, `The <img> tag  is used to embed an
 image in an HTML document.`,)
let bodyImageTag = examples(`<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`,);
for (let key in bodyImageTag) {
    webSite.html.construction.tagBody.tagsIn[5].functions[key] = bodyImageTag[key]
};
webSite.html.construction.tagBody.tagsIn[6] = makeBodyTags(`Table Tag`, `<table> <td> <th> </th> </td> </table>`, `Block-level`,
    `The <table> tag defines an HTML table.`);
let bodyTableTag = examples(`An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements.`,
    `The <tr> element defines a table row, the <th> element defines a table header, and the <td> element defines a table cell.`,
    `An HTML table may also include <caption>, <colgroup>, <thead>, <tfoot>, and <tbody> elements.`,
    `<table>
<tr>
  <th>Month</th>
  <th>Savings</th>
</tr>
<tr>
  <td>January</td>
  <td>$100</td>
</tr>
</table>`);
for (let key in bodyTableTag) {
    webSite.html.construction.tagBody.tagsIn[6].functions[key] = bodyTableTag[key]
};
webSite.html.construction.tagBody.tagsIn[7] = makeBodyTags(`Div Tag`,`<div> </div>`,`Block-level`,`The <div> tag defines a division or a section in an HTML document.`);
let bodyDivTag = examples(`The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.`,
`The <div> tag is easily styled by using the class or id attribute.`,
`Any sort of content can be put inside the <div> tag! `,
`<div class="myDiv">
<h2>This is a heading in a div element</h2>
<p>This is some text in a div element.</p>
</div>`)
for(let key in bodyDivTag){
    webSite.html.construction.tagBody.tagsIn[7].functions[key] = bodyDivTag[key] 
};



//Կլոնաորել ամբողջ Object-ը,և նոր կլոնի մեջ  tagBody-ի մեջ ավելացնել "requirement" արգումենտը և տալ "required" արժեքը!


let webSiteCopy = structuredClone(webSite);
webSiteCopy.html.construction.tagBody.requirement="Required";
console.log(webSite);
console.log(webSiteCopy);