import axios, {AxiosResponse} from 'axios';
import { IRequestItem } from 'types/IRequestItem';

const apiHost = process.env.NEXT_PUBLIC_API_HOST;
const apiAuth = process.env.NEXT_PUBLIC_API_AUTH;

axios.defaults.headers.common['Authorization'] = apiAuth;

export const searchByTerm = (term: string) : Promise<AxiosResponse<IRequestItem[]>> => {
  return axios.get(`${apiHost}/items?search=${term}`);
};

export const getById = (id: string): Promise<AxiosResponse<IRequestItem>> => {
  return axios.get(`${apiHost}/items/${id}`);
};
