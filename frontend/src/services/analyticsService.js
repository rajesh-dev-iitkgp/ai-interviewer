import api from "./apiService";

const getInterviewHistory = async () => {
    const response = await api.get("/api/analytics/history");
    return response;
};

const getOverview = async () => {
    const response = await api.get("/api/analytics/overview");
    return response;
};

const getProgress = async () => {
    const response = await api.get("/api/analytics/score-progress");
    return response;
};

const getRolePerformance = async () => {
    const response = await api.get("/api/analytics/role-performance");
    return response;
};

const getFeedback = async () => {
    const response = await api.get("/api/analytics/feedback");
    return response;
};

export { getInterviewHistory, getOverview, getProgress, getRolePerformance, getFeedback };