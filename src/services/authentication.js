export const getUser = () => {
    const userStr = localStorage.getItem('email');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const login = (token, email, role, log) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('role', JSON.stringify(role));
    localStorage.setItem('isLogged', JSON.stringify(log));
}

export const getToken = () => {
    return localStorage.getItem('token') || null;
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.setItem('isLogged', 'false');
    
}