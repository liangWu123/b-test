import instance from '../axios';

export default {
  postLogin(params) {
    return instance.post('/passport/login', params);
  },
};
