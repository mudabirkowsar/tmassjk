import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL || 'http://localhost:5000';

const UserAPI = {
    getAllEvents: async () => {
        const response = await axios.get(`${API_BASE_URL}/api/events`);
        return response.data;
    },

    getEventById: async (eventId) => {
        const response = await axios.get(`${API_BASE_URL}/api/events/${eventId}`);
        return response.data;
    },

    createEvent: async (eventData) => {
        const response = await axios.post(`${API_BASE_URL}/api/events`, eventData);
        return response.data;
    },

    updateEvent: async (eventId, eventData) => {
        const response = await axios.put(`${API_BASE_URL}/api/events/${eventId}`, eventData);
        return response.data;
    },

    deleteEvent: async (eventId) => {
        const response = await axios.delete(`${API_BASE_URL}/api/events/${eventId}`);
        return response.data;
    },
}

export default UserAPI;