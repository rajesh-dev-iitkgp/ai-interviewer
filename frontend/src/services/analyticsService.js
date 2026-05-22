import api from "./apiService";

const getInterviewHistory = async () => {
    const response = await api.get("/api/analytics/history");
    return response;
};

const getOverview = async () => {
    const response = await api.get("/api/analytics/overview");
    return response;
};

export { getInterviewHistory, getOverview };