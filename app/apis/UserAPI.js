import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Create an axios instance
const API = axios.create({
    baseURL: API_BASE_URL,
});

// Add a request interceptor to attach the token
API.interceptors.request.use(
    (config) => {
        // Only run on the client side
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const UserAPI = {
    loginAdmin: async (credentials) => {
        try {
            // credentials contains { identifier, password }
            const response = await axios.post(`${API_BASE_URL}/api/admin/login`, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            // Pass the specific error from backend or a fallback
            const message = error.response?.data?.message || "Connection to server failed";
            throw new Error(message);
        }
    },

    getAllEvents: async () => {
        const response = await axios.get(`${API_BASE_URL}/api/events`);
        return response.data;
    },

    getEventById: async (eventId) => {
        const response = await axios.get(`${API_BASE_URL}/api/events/${eventId}`);
        return response.data;
    },

    createEvent: async (eventData) => {
        const response = await API.post(`${API_BASE_URL}/api/events`, eventData);
        return response.data;
    },

    updateEvent: async (eventId, eventData) => {
        const response = await API.put(`${API_BASE_URL}/api/events/${eventId}`, eventData);
        return response.data;
    },

    deleteEvent: async (eventId) => {
        const response = await API.delete(`${API_BASE_URL}/api/events/${eventId}`);
        return response.data;
    },

    getAffiliations: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/affiliation`);
            return response.data; // Returns { success: true, data: [...] }
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // 2. NEW: Function to submit the initial form
    submitAffiliation: async (formData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/affiliation/submit`, formData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // 3. Admin: Update only the status (Approved/Rejected/Under Review)
    updateAffiliationStatus: async (id, status, adminRemarks = "") => {
        try {
            // Changed from .put /draft/ to .patch /status/ to match the new route
            const response = await API.patch(`${API_BASE_URL}/api/affiliation/status/${id}`, {
                status,
                adminRemarks
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // 4. Admin: Delete an application
    deleteAffiliation: async (id) => {
        try {
            const response = await API.delete(`${API_BASE_URL}/api/affiliation/${id}`);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // 5. Get details of a single application
    getAffiliationById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/affiliation/${id}`);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    getVerifiedAffiliations: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/affiliation/verified`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 1. PUBLIC: Get all legacy gallery items
    getGalleryItems: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/gallery`);
            return response.data; // Returns { success: true, data: [...] }
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 2. ADMIN: Add a new photo/founder to the archive
    addGalleryItem: async (galleryData) => {
        try {
            const response = await API.post(`${API_BASE_URL}/api/gallery`, galleryData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 3. ADMIN: Update existing gallery details
    updateGalleryItem: async (id, updatedData) => {
        try {
            const response = await API.put(`${API_BASE_URL}/api/gallery/${id}`, updatedData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 4. ADMIN: Delete an item from the gallery
    deleteGalleryItem: async (id) => {
        try {
            const response = await API.delete(`${API_BASE_URL}/api/gallery/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 1. UPLOAD CSV
    uploadResult: async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await API.post(
                `${API_BASE_URL}/api/result/upload-csv`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 2. SEARCH RESULT (rollNo OR enrollmentNo)
    searchResults: async (query) => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/api/result/search/${query}`
            );

            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 3. DELETE RESULT
    deleteResult: async (id) => {
        try {
            const response = await API.delete(
                `${API_BASE_URL}/api/result/${id}`
            );

            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
    // 5. DELETE ALL RESULTS
    deleteAllResults: async () => {
        try {
            const response = await API.delete(
                `${API_BASE_URL}/api/result/clear-all`
            );
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // 4. FETCH ALL RESULTS
    fetchAllResult: async () => {
        try {
            const response = await API.get(
                `${API_BASE_URL}/api/result/all`
            );

            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Add this to your apis/UserAPI.js
registerAdmin: async (adminData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/admin/register`, adminData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
},
};


export default UserAPI;