import { HTTPTransport } from 'utils/classes';
import { URLS, HEADERS } from 'utils/consts';

export abstract class BaseAPI {
  private _http: HTTPTransport;
  private _path: string;
  private _headers: Record<string, string>;

  constructor({ path }: Record<string, string>) {
    this._http = new HTTPTransport(URLS.BASE);
    this._path = path;
    this._headers = HEADERS.CT_APPLICATION_JSON;
  }

  post(url: string, data: unknown) {
    return this._http.post(`${this._path}/${url}`, { headers: this._headers, data });
  }

  get(url: string) {
    return this._http.get(`${this._path}/${url}`, { headers: this._headers });
  }

  put(url: string, data: unknown, headers?: unknown) {
    return this._http.put(`${this._path}/${url}`, {
      headers: headers ? headers : this._headers,
      data,
    });
  }

  delete(url: string, data: unknown) {
    return this._http.delete(`${this._path}/${url}`, { headers: this._headers, data });
  }
}
