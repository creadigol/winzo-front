import API from './Api';

export const loginReq = (params: any) => {
    
    const formData = new FormData();
    // formData.append('metamaskId', params.data.metamaskId);
    return API.post(`users/auth`, params.data);
};