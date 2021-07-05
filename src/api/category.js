import instance from '../axios';

export default {
  getCategorylist(params) {
    return instance.get('/category/all', {
      params,
    });
  },
  getCategoryAdd(params) {
    instance.get('/category/add', {
      params,
    });
  },

  putCateGoryEdie(params) {
    instance.put(' /category/edit', {
      params,
    });
  },
  deleteCateGoryList(id) {
    instance.delete(`/category/${id}`);
  },

};
