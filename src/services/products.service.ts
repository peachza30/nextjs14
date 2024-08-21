import { ProductData } from './../models/product.model';
import httpClient from '@/utils/httpClient';
export const getProducts = async () => {
  const { data } = await httpClient.get('/test');
  return data;
};
export const createProduct = async (data : ProductData) => {
  const { data: response } = await httpClient.post('/test', data);
  return response;
};
