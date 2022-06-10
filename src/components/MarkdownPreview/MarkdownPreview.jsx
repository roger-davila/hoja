import './MarkdownPreview.css';
export default function MarkdownPreview({ html }) {
  return (
    <div className='MarkdownPreview' dangerouslySetInnerHTML={{ __html: html }} />
  )
}