import Axios, { AxiosInstance } from 'axios';
import store from '@/store';
/* eslint-disable */ 
export function axiosCreator(): AxiosInstance {
  return Axios.create({  
    baseURL: `http://192.168.1.121:30001/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': !!localStorage.getItem('vuex.state.token') ? `Bearer ${store.getters['token']}` : ''
    }
  });
}

