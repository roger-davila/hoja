import sendRequest from './send-request';
const BASE_URL = '/api/notebooks';

export function getNotebooks() {
  return sendRequest(`${BASE_URL}/user/notebooks`);
}

export function getNotebook(notebookId) {
  return sendRequest(`${BASE_URL}/user/notebooks/${notebookId}`);
}

export function getFromNotebook(notebookId) {
  return sendRequest(`${BASE_URL}/user/notebooks/${notebookId}/notes`);
}