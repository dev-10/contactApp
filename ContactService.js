import axios, { Axios } from 'axios';
export default class ContactService {
    static baseUrl = "http://localhost:5091/contacts"

    static GetPhones() {
    return axios.get(this.baseUrl);
    }
    static GetPhone(contactId) {
        let getUrl = `${this.baseUrl}/${contactId}`;
        return axios.get(getUrl);
    }
    static AddPhone(contact) {
        return axios.post(this.baseUrl, contact);
    }
    static UpdatePhone(contact) {
        return axios.put(this.baseUrl, contact);
    }
    static DeletePhone(contactId) {
        let delUrl = `${this.baseUrl}/${contactId}`;
        return axios.delete(delUrl);
    }
}