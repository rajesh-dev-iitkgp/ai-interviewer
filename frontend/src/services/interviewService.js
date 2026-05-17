import api from "./apiService";

const generateInterview = async (data) => {
    const response = await api.post("/api/interview/generate", data);
    return response;
};

export { generateInterview };