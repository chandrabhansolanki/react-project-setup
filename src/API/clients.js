import axios from 'axios';
import { navigate } from 'gatsby';

let apiClient = null;
// const { GATSBY_BACKEND_URL } = process.env;
class WashTraxClient {
  constructor() {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }
  _getClient() {
    apiClient = axios.create({
      baseURL: "Enter your base url",
    });
    

    apiClient.interceptors.request.use(
      async (config) => {
        const token =
          (await typeof window) !== 'undefined'
            ? localStorage.getItem('token')
            : '';
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    return apiClient;
  }

  _config() {
    return {};
    //return { headers: { Authorization: access_token } };
  }
  _authConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${JSON.stringify(token)}`,
      },
    };
  }

  checkAuth(val) {
    val.catch((res) => {
      if (res.message === 'Request failed with status code 401') {
        navigate('/auth');
        localStorage.removeItem('token');
        localStorage.removeItem('role_id');
        localStorage.removeItem('data');
        localStorage.removeItem('userName');
        localStorage.removeItem('yard');
      }
    });
  }

  get(url) {
    const _get = this._getClient().get(url, this._config());
    this.checkAuth(_get);
    return _get;
  }

  post(url, data, progress) {
    const _post = this._getClient().post(url, data, progress, this._config());
    this.checkAuth(_post);
    return _post;
  }
  patch(url, data) {
    const _patch = this._getClient().patch(url, data, this._config());
    this.checkAuth(_patch);
    return _patch;
  }
  put(url, data) {
    const _put = this._getClient().put(url, data, this._config());
    this.checkAuth(_put);
    return _put;
  }
  delete(url, data) {
    const _delete = this._getClient().delete(url, data, this._config());
    this.checkAuth(_delete);
    return _delete;
  }
}

const SOpClient = new WashTraxClient();
const get = SOpClient.get;
const post = SOpClient.post;
const patch = SOpClient.patch;
const put = SOpClient.put;
const _delete = SOpClient.delete;
const token =
  typeof window !== 'undefined' ? localStorage.getItem('token') : '';
const clientId =
  typeof window !== 'undefined' ? localStorage.getItem('userId') : '';

export default {
  WashTraxClient,
};
export {
  token,
  // formData,
  clientId,
  get,
  post,
  patch,
  put,
  _delete,
};
