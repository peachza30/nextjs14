import httpClient from '@/utils/httpClient';
import { UserData } from '../models/user.model';
export const getUsers = async () => {
  const { data } = await httpClient.get('/user');
  return data;
};
export const createUser = async (data : UserData) => {
  const { data: response } = await httpClient.post('/user', data);
  return response;
};
export const updateUser = async (data : UserData) => {
  const { data: response } = await httpClient.put(`/user/${data.id}`, data);
  return response;
};
export const deleteUser = async (data : UserData) => {
  const { data: response } = await httpClient.delete(`/user/${data.id}`);
  return response;
};
