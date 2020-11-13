
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
    // addCustomer,
    // addLocation,
    // addCompany,
    // addUser,
    // addEvent,

};

function getUsers() {
    return fetch(url + "all-users").then(receivedData => receivedData.json());
}

function getGuides() {
    return fetch(url + "all-guides").then(receivedData => receivedData.json());
}
function addGuide(req){
    return fetch(url + "addGuide",req).then(response => response.json());
}

export default Server