
const url = "http://localhost:8080/api/";
const 

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
//User

const user = "user/"
function getUsers() {
    return fetch(url + user +"all-users").then(receivedData => receivedData.json());
}
//Guide
const guide = "guide/"
function getGuides() {
    return fetch(url + guide + "all-guides").then(receivedData => receivedData.json());
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

export default Server