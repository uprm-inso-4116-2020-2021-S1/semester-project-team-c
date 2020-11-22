export const getUser = () => {
    const userStr = localStorage.getItem('email');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const login = (token, email, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('role', JSON.stringify(role));
}

export const getToken = () => {
    return localStorage.getItem('token') || null;
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    
}