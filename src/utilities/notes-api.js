import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(`${BASE_URL}/notes/user`);
}

export function createNote() {
  return sendRequest(`${BASE_URL}/notes/user`, 'POST');
}

export function getNote(noteId) {
  return sendRequest(`${BASE_URL}/notes/user/${noteId}`);
}