
const url = "http://localhost:8080/api/";

export const Server = {
    getGuides,
    getUsers,
    // getCustomers,
    // getLocations,
    // getCompanies,
    // getEvent,
    // getReview,
    // addUser,
    addGuide,
    addCustomer,
    // addLocation,
    // addCompany,
    // addUser,
    // addEvent,

};
//User

function getUsers() {
    return fetch(url +"all-users").then(receivedData => receivedData.json());
}

//Guide
function getGuides() {
    return fetch(url + "all-guides").then(receivedData => receivedData.json());
}
function addGuide(data){
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + "add-guide",req).then(response => response.json());
}

//Company

//Customer

function addCustomer(data){
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + "add-customer",req).then(response => response.json());
}

export default Server