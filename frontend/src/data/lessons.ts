import {
  tempJavaScriptDocs1,
  tempJavaScriptDocs2,
  tempPythonDocs1,
} from "./docs";
import {
  tempJavascriptChallenges1,
  tempJavascriptChallenges2,
  tempPythonChallenges1,
} from "./challenges";

export const tempJavascriptLessons = [
  {
    title: "JavaScript 1",
    description: `JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
      \n\nJavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).`,
    sections: [
      {
        title: "Section 1",
        description: "This is a description",
        content: "This is a content",
      },
      {
        title: "Section 2",
        description: "This is a description",
        content: "This is a content",
      },
      {
        title: "Section 3",
        description: "This is a description",
        content: "This is a content",
      },
    ],
    challenges: tempJavascriptChallenges1,
    docs: tempJavaScriptDocs1,
  },
  {
    title: "JavaScript 2",
    description: "This is a description",
    sections: [
      {
        title: "Section 1",
        description: "This is a description",
        content: "This is a content",
      },
      {
        title: "Section 2",
        description: "This is a description",
        content: "This is a content",
      },
    ],
    challenges: tempJavascriptChallenges2,
    docs: tempJavaScriptDocs2,
  },
];
export const tempPythonLessons = [
  {
    title: "Python 1",
    description: "This is a description",
    sections: [
      {
        title: "Section 1",
        description: "This is a description",
        content: "This is a content",
      },
      {
        title: "Section 2",
        description: "This is a description",
        content: "This is a content",
      },
    ],
    challenges: tempPythonChallenges1,
    docs: tempPythonDocs1,
  },
];
