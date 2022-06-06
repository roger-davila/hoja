import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(`${BASE_URL}/notes/user`);
}