import cIMG from './c-logo.png';
const langsList = [
  {
    src: "https://img.icons8.com/ios-glyphs/480/ffffff/python.png",
    alt: "Python"
  },
  {
    src:   "https://img.icons8.com/ios/400/ffffff/java-coffee-cup-logo--v1.png",
    alt: "Java"
  },
  {
    src:   cIMG,
    alt: "C"
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/c-sharp-logo.png",
    alt: "C#"

  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
    alt: "Bash",
    id: "bash"
  },
  {
    src: "https://img.icons8.com/ios-filled/400/ffffff/javascript.png",
    alt: "JavaScript"
  },
  {
    src:   "https://img.icons8.com/ios-filled/400/ffffff/html-5--v1.png",
    alt: "HTML5"
  },
  {
    src:   "https://img.icons8.com/ios-filled/400/ffffff/css3.png",
    alt: "CSS3",
    id: "css"
  },
  {
    src:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDEzMi41ODMzM2MwLDkuODk3MTcgLTguMDE5NSwxNy45MTY2NyAtMTcuOTE2NjcsMTcuOTE2NjdoLTkzLjE2NjY3Yy05Ljg5MzU4LDAgLTE3LjkxNjY3LC04LjAxOTUgLTE3LjkxNjY3LC0xNy45MTY2N3YtOTMuMTY2NjdjMCwtOS44OTcxNyA4LjAyMzA4LC0xNy45MTY2NyAxNy45MTY2NywtMTcuOTE2NjdoOTMuMTY2NjdjOS44OTcxNywwIDE3LjkxNjY3LDguMDE5NSAxNy45MTY2NywxNy45MTY2N3oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTE4LjM1NzUsOTEuNzMzMzNjLTIuMzI5MTcsLTMuMjI1IC01LjY5NzUsLTUuNDQ2NjcgLTEwLjAzMzMzLC02LjYyOTE3YzAsMCAzLjY1NSwtMS4zMjU4MyA2Ljk1MTY3LC02LjI3MDgzYzEuOTcwODMsLTMuMTUzMzMgMi45NzQxNywtNi45NTE2NyAyLjk3NDE3LC0xMS4zOTVjMCwtNy43MDQxNyAtMi43OTUsLTEzLjYxNjY3IC04LjM4NSwtMTcuNjY1ODNjLTUuNTksLTQuMDQ5MTcgLTExLjg5NjY3LC02Ljc3MjUgLTIyLjYxMDgzLC02Ljc3MjVoLTMzLjUwNDE3djg2aDM3LjM3NDE3YzEwLjE0MDgzLC0wLjA3MTY3IDE3Ljc3MzMzLC0yLjI1NzUgMjIuOTY5MTcsLTYuNDVjNS4xNiwtNC4yNjQxNyA3Ljc0LC0xMC41NzA4MyA3Ljc0LC0xOC45OTE2N2MwLC00LjY1ODMzIC0xLjE0NjY3LC04LjYgLTMuNDc1ODMsLTExLjgyNXpNNzUuMjUsNTcuMzMzMzNjMCwwIDE0Ljk0MjUsMCAxNS4yMjkxNywwYzUuNDQ2NjcsMCA5Ljg1NDE3LDQuNDA3NSA5Ljg1NDE3LDkuODU0MTdjMCw1LjQ0NjY3IC00LjQwNzUsOS44NTQxNyAtOS44NTQxNyw5Ljg1NDE3Yy0wLjI4NjY3LDAgLTE1LjIyOTE3LDAgLTE1LjIyOTE3LDB6TTkzLjE2NjY3LDExNC42NjY2N2gtMTcuOTE2Njd2LTIxLjVoMTcuOTE2NjdjNS45NDgzMywwIDEwLjc1LDQuODAxNjcgMTAuNzUsMTAuNzVjMCw1Ljk0ODMzIC00LjgwMTY3LDEwLjc1IC0xMC43NSwxMC43NXoiIGZpbGw9IiMzODNmNDQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    alt: "Bootstrap",
    id: "bootstrap"
  },
  {
    src: "https://img.icons8.com/windows/512/ffffff/nodejs.png",
    alt: "NodeJS",
   
  },
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/php-logo.png",
    alt: "php"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/300/ffffff/react.png",
    alt: "ReactJS"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    alt: "Express.js",
    id: "express"
  },
  {
    src: "data:image/png;base64,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",
    alt: "MongoDB",
    id: "mongo"

  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/data-configuration.png",
    alt: "SQL",
    id: "sql"
  },
  {
    src: "https://img.icons8.com/ios/150/ffffff/mysql-logo.png",
    alt: "MySQL"
  },




  

];
const toolsList = [
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/linux.png" ,
    alt: "Linux"
  },
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/git.png",
    alt: "Git"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/400/ffffff/github.png",
    alt: "GitHub",
  },
  {
    src: "https://img.icons8.com/windows/400/ffffff/npm.png",
    alt: "npm"
  },
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/visual-studio-logo.png",
    alt: "VScode"
  },
  {
    src: "data:image/png;base64,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",
    alt: "Vim"
  },
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/unity.png",
    alt: "Unity",
    id: "unity"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/400/ffffff/figma.png",
    alt: "Figma"
  },
  {
    src: "https://img.icons8.com/ios-filled/150/ffffff/blender-3d.png",
    alt: "Blender"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/400/ffffff/jira.png",
    alt: "Jira"
  },
  {
    src: "https://img.icons8.com/ios-filled/300/ffffff/slack-new.png",
    alt: "Slack"
  }
];

const findMeList = [
  {
    src: "https://img.icons8.com/ios-glyphs/400/ffffff/github.png",
    alt: "GitHub",
    link: "https://github.com/Ghazalmir"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/150/ffffff/linkedin.png",
    alt: "linkedin",
    link: "https://linkedin.com/in/ghazalmir"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/200/ffffff/gmail.png",
    alt: "Email",
    link: "mailto:contact@ghazalmir.com"
  }
];

const findMeListBlack = [
  {
    src: "https://img.icons8.com/ios-glyphs/400/212529/github.png",
    alt: "GitHub",
    link: "https://github.com/Ghazalmir"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/150/212529/linkedin.png",
    alt: "linkedin",
    link: "https://linkedin.com/in/ghazalmir"
  },
  {
    src: "https://img.icons8.com/ios-glyphs/200/212529/gmail.png",
    alt: "Email",
    link: "mailto:contact@ghazalmir.com"
  }
];
export  { langsList, toolsList, findMeList, findMeListBlack};