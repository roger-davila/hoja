import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import NoteDetailPage from '../NoteDetailPage/NoteDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path={`/${user.name}/notes`} element={<NotesPage user={user}/>} />
            <Route path={`/${user.name}/notes/:noteId`} element={<NoteDetailPage user={user}/>} />
            <Route path='/*' element={<Navigate to={`/${user.name}/notes`} />} />
          </Routes>
          <NavBar user={user} setUser={setUser} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
