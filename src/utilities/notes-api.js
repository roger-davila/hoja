import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(`${BASE_URL}/user/notes`);
}

export function createNote() {
  return sendRequest(`${BASE_URL}/user/note`, 'POST');
}

export function getNote(noteId) {
  return sendRequest(`${BASE_URL}/user/notes/${noteId}`);
}

export function saveNote(note) {
  return sendRequest(`${BASE_URL}/user/notes/note`, 'PUT', { note });
}

export function deleteNote(noteId) {
  return sendRequest(`${BASE_URL}/user/notes/${noteId}`, 'DELETE');
}