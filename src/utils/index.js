import mCookies from 'js-cookie';

export default {
  getcookise() {
    return {
      appkey: mCookies.get('appkey'),
      email: mCookies.get('email'),
      role: mCookies.get('role'),
      username: mCookies.get('username'),
    };
  },
  setcookies(res) {
    const arr = Object.entries(res);
    arr.forEach((v) => {
      mCookies.set(v[0], v[1]);
    });
    return true;
  },
  removecookies() {
    mCookies.remove('appkey');
    mCookies.remove('email');
    mCookies.remove('role');
    mCookies.remove('username');
    return true;
  },
};
