const getStorage = () => {
    return localStorage.getItem("user_info") ? JSON.parse(localStorage.getItem("user_info")) : [];
};

export { getStorage };
