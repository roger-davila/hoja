import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../HojaIcons/HojaIcons';
import './Notebook.css';
export default function Notebook({ notebook, user }) {
  return (
    <Link className='notebook-link' to={`/${user.name}/notebooks/${notebook._id}`}>
      <article className="Notebook">
        <h3 className="title">{notebook.name}</h3>
        <div className='arrow-container' >
          <ArrowRightIcon />
        </div>
      </article>
    </Link>
  )
}