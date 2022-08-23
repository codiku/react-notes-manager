import axios from "axios"

const BASE_URL = "https://6304ae6894b8c58fd722c01e.mockapi.io/notes"

export class NoteAPI {
    static async create(title, content) {
        return (await axios.post(`${BASE_URL}}`, { title, content })).data
    }
    static async fetchAll() {
        return (await axios.get(`${BASE_URL}`)).data
    }
    static async fetchById(noteId) {
        return (await axios.get(`${BASE_URL}/${noteId}`)).data
    }
    static async deleteById(noteId) {
        return (await axios.delete(`${BASE_URL}/${noteId}`)).data
    }
    static async updateById(noteId) {
        return (await axios.patch(`${BASE_URL}/${noteId}`)).data
    }
}