import { getRequest } from 'utils/http';
import { Environment } from 'global/environment';

const url = `${Environment.BACKEND_API}/users`;

export function getUserAPI() {
  return getRequest(`${url}/1`);
}
