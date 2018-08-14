import axios from 'axios'

export default class Cars {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/';
    }

    getAll() {
        return axios.get('cars');
    }

    add(car) {
        return axios.post('cars', car);
    }

    get(id) {
        return axios.get(`cars/${id}`);
    }

    edit(id, car) {
        return axios.put(`cars/${id}`, car);
    }

    delete(id) {
        return axios.delete(`cars/${id}`);
    }
}

export const cars = new Cars();