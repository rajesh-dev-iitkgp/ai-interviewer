import api from "./apiService";

const getInterviewHistory = async () => {
    const response = await api.get("/api/analytics/history");
    return response;
};

export { getInterviewHistory };