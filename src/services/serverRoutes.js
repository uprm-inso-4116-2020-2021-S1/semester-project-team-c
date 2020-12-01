
const url = "http://localhost:8080/api/";

export const Server = {
    getGuides,
    getTourGuides, //All guides that are participating in tour
    getUsers,
    getUser,
    getCustomers,
    getCustomer,
    getGuide,
    getTourInfo,
    getUserTours,
    getTourEvents,
    addTourToList,
    // getLocations,
    // getCompanies,
    // getReview,
    addGuide,
    addCustomer,
    getEventByCity,
    // addLocation,
    // addCompany,
    // addUser,
    addTour,
    addEvent,
    login,

};
//public

function login(data) {
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + "login", req).then(receivedData => receivedData.json());
}

//User
const user = "user/";
function getUsers() {
    return fetch(url + user +"all-users").then(receivedData => receivedData.json());
}

function getUser(email) {
    return fetch(url + user + email).then(receivedData => receivedData.json());
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
    return fetch(url + guide + "add-guide",req).then(receivedData => receivedData.json());
}

function getGuide(uid) {

    return fetch(url + guide + uid).then(receivedData => receivedData.json());
}

//Company
const company = "company/";

//Customer
const customer = "customer/";

function getCustomer(uid) {

    return fetch(url + customer + uid).then(receivedData => receivedData.json());
}

function getCustomers() {
    return fetch(url + customer + "all-customers").then(receivedData => receivedData.json());
}

function addCustomer(data){
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + customer + "add-customer",req).then(response => response.json());
}

//Tours
const tour = "tour/";

function getUserTours(uid) {
    return fetch(url + tour + "attending/" + uid).then(receivedData => receivedData.json());
}

function getTourGuides(coid, tid) {
    return fetch(url + tour + "company/" + coid + "/guideList/" + tid).then(receivedData => receivedData.json());
}

function getTourInfo(tid) {
    return fetch(url + tour + "info/" + tid).then(receivedData => receivedData.json());
}

function addTourToList(tid, uid){
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'}
    };
    return fetch(url + tour + tid + "/user/" + uid, req).then(receivedData => receivedData.json());
}


function addTour(data) {
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + tour + "create",req).then(response => response.json());
}

//Event

const event = "event/";

function addEvent(data) {
    const req = {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: data 
    };
    return fetch(url + event + "create",req).then(response => response.json());
}

function getTourEvents(tid) {
    return fetch(url + event + "tour/" + tid).then(receivedData => receivedData.json());
}

function getEventByCity(city){
    return fetch(url + event + "city/" + city).then(receivedData => receivedData.json());
}

export default Server






