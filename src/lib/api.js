import axios from 'axios';

export default axios.create({
  baseURL: 'http://hn.algolia.com',
});
