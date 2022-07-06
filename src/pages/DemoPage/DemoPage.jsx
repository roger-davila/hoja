import { useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';
import MarkdownPreview from '../../components/MarkdownPreview/MarkdownPreview';

export default function DemoPage() {
  const [note, setNote] = useState({
    title: 'Sample Note',
    markdown_text: 
`## Things to fix for the app

* Remove the touch that shows when clicking the input field.
* PopupDrawer has a border on mobile view. Reveal isn’t as snappy. Add more text to see what happens when the line wraps.
* Change plus icon to a carrot up
* Add keyboard shortcuts to actions

# Header 1  
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Some Javascript Highlighting

\`\`\`javascript
// Javascript
const cart = 'this';

const animalArr = ['dog', 'cat', 'mouse'];

\`\`\`

### Some Python Highlighting
\`\`\`python
# Python

animal_list = ['dog', 'cat', 'mouse'];

for animal in animal_list:
    print(animal);

\`\`\`

I think the page might need some padding at the bottom.`
  });
  
  const [isMarkdown, setIsMarkdown] = useState(false);

  function handleTyping(evt) {
    setNote({ ...note, [evt.target.name]: evt.target.value });
  }

  function parseNote() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    // Checks if new notes has been typed on, otherwise the marked parser will fail if the input is not of a string type.
    const html = typeof note.markdown_text === 'string' ? marked.parse(note.markdown_text) : '';
    return <MarkdownPreview html={html} />
  }

  return (
    <main className='NoteDetailPage main-container'>
      <header className='note-head'>
        <input className='note-title' name="title" onChange={handleTyping} value={note.title} />
      </header>
      {isMarkdown ? parseNote() : <textarea className='note-field' value={note.markdown_text} name="markdown_text" onChange={handleTyping} placeholder='Note field...' ></textarea>}
      <PopupDrawer page={'demo'} note={note} setIsMarkdown={setIsMarkdown} />
    </main>
  )
}