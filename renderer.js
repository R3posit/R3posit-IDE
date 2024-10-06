import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('editor'), {
  value: "// Buraya kod yazabilirsiniz...",
  language: "javascript",
  theme: "vs-dark"
});
