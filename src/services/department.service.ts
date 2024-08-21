import httpClient from '@/utils/httpClient';
import { DepartmentData } from './../models/department.model';

export const getDepartment = async () => {
    const { data } = await httpClient.get('/department');
    return data;
}