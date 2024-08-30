import httpClient from '@/utils/httpClient';
import { PersonalData } from '../models/personal.model';

export const getDepartment = async () => {
    const { data } = await httpClient.get('/department');
    return data;
}