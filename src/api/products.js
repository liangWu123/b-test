import instance from '../axios';

export default {
  getProductsList(params) {
    return instance.get('/products/all', {
      params,
    });
  },
  postProductsAdd(params) {
    return instance.post('/products/add', params);
  },
  putProductsEdit(params) {
    return instance.put('/products/edit', {
      params,
    });
  },
  getProductsId(id) {
    return instance.get(`/products/${id}`);
  },
  deleteProductsId(id) {
    return instance.delete(`/products/${id}`);
  },
  uploadImages(params) {
    return instance.post('/upload/images', params);
  },
};
