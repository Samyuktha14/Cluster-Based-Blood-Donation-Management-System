// Firebase API
var firebaseConfig = {
    apiKey: "AIzaSyAuB_mV6yWKOZteD5U9ntyFp5sac5-7eNM",
    authDomain: "cbbms-123.firebaseapp.com",
    databaseURL: "https://cbbms-123-default-rtdb.firebaseio.com",
    projectId: "cbbms-123",
    storageBucket: "cbbms-123.appspot.com",
    messagingSenderId: "451826055464",
    appId: "1:451826055464:web:a588f33ce75a959bb3381d",
    measurementId: "G-HN0T3TTYH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var donor_name_arr = [], donor_id_arr = [], donor_blood_group_arr = [], donor_age_arr = [], donor_weight_arr = [], donor_email_arr = [], donor_address_arr = [];
var name_arr = [], id_arr = [], blood_group_arr = [], age_arr = [], weight_arr = [], email_arr = [], address_arr = [];

function getDonorsData(){
    firebase.database().ref('donor/donorNames').on('value', (snap) => {
        if(snap.val()){
            donor_name_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorIDs').on('value', (snap) => {
        if(snap.val()){
            donor_id_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorBloodGroups').on('value', (snap) => {
        if(snap.val()){
            donor_blood_group_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorAges').on('value', (snap) => {
        if(snap.val()){
            donor_age_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorWeights').on('value', (snap) => {
        if(snap.val()){
            donor_weight_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorEmails').on('value', (snap) => {
        if(snap.val()){
            donor_email_arr = snap.val();
        }
    });
    firebase.database().ref('donor/donorAddresses').on('value', (snap) => {
        if(snap.val()){
            donor_address_arr = snap.val();
        }
    });
}

function getPatientsData(){
    firebase.database().ref('patient/patientNames').on('value', (snap) => {
        if(snap.val()){
            name_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientIDs').on('value', (snap) => {
        if(snap.val()){
            id_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientBloodGroups').on('value', (snap) => {
        if(snap.val()){
            blood_group_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientAges').on('value', (snap) => {
        if(snap.val()){
            age_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientWeights').on('value', (snap) => {
        if(snap.val()){
            weight_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientEmails').on('value', (snap) => {
        if(snap.val()){
            email_arr = snap.val();
        }
    });
    firebase.database().ref('patient/patientAddresses').on('value', (snap) => {
        if(snap.val()){
            address_arr = snap.val();
        }
    });
}

getDonorsData();
getPatientsData();

function register_as_donor(){
    var name = document.getElementById('name');
    var id = document.getElementById('id');
    var blood_group = document.getElementById('blood_group');
    var age = document.getElementById('age');
    var weight = document.getElementById('weight');
    var email = document.getElementById('email');
    var address = document.getElementById('address');

    donor_name_arr.push(name.value);
    donor_id_arr.push(id.value);
    donor_blood_group_arr.push(blood_group.value);
    donor_age_arr.push(age.value);
    donor_weight_arr.push(weight.value);
    donor_email_arr.push(email.value);
    donor_address_arr.push(address.value);

    firebase.database().ref('donor/donorNames').set(donor_name_arr);
    firebase.database().ref('donor/donorIDs').set(donor_id_arr);
    firebase.database().ref('donor/donorBloodGroups').set(donor_blood_group_arr);
    firebase.database().ref('donor/donorAges').set(donor_age_arr);
    firebase.database().ref('donor/donorWeights').set(donor_weight_arr);
    firebase.database().ref('donor/donorEmails').set(donor_email_arr);
    firebase.database().ref('donor/donorAddresses').set(donor_address_arr);

    alert("Success");
    name.value = "";
    id.value = "";
    blood_group.value = "";
    age.value = "";
    weight.value = "";
    email.value = "";
    address.value = "";
}

function register_as_patient(){
    var name = document.getElementById('name');
    var id = document.getElementById('id');
    var blood_group = document.getElementById('blood_group');
    var age = document.getElementById('age');
    var weight = document.getElementById('weight');
    var email = document.getElementById('email');
    var address = document.getElementById('address');

    name_arr.push(name.value);
    id_arr.push(id.value);
    blood_group_arr.push(blood_group.value);
    age_arr.push(age.value);
    weight_arr.push(weight.value);
    email_arr.push(email.value);
    address_arr.push(address.value);
    
    firebase.database().ref('patient/patientNames').set(name_arr);
    firebase.database().ref('patient/patientIDs').set(id_arr);
    firebase.database().ref('patient/patientBloodGroups').set(blood_group_arr);
    firebase.database().ref('patient/patientAges').set(age_arr);
    firebase.database().ref('patient/patientWeights').set(weight_arr);
    firebase.database().ref('patient/patientEmails').set(email_arr);
    firebase.database().ref('patient/patientAddresses').set(address_arr);

    alert("Success");
    name.value = "";
    id.value = "";
    blood_group.value = "";
    age.value = "";
    weight.value = "";
    email.value = "";
    address.value = "";
}

function login(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if(username.value == "admin"){
        if(password.value == "Admin@123"){
            window.location.assign("admindashboard.html");
        }
        else{
            alert('Incorrect Password');
        }
    }
    else{
        alert('Incorrect Username');
    }
}

function searchList(){
    var blood_group = document.getElementById('blood_group');
    var tableCont = document.getElementById('tableCont');
    var len = donor_id_arr.length;
    tableCont.innerHTML = "";
    for(var i = 0; i < len; i++){
        if(blood_group.value == donor_blood_group_arr[i]){
            tableCont.innerHTML += `
            <tr>
                <td>${donor_name_arr[i]}</td>
                <td>${donor_id_arr[i]}</td>
                <td>${donor_blood_group_arr[i]}</td>
                <td>${donor_age_arr[i]}</td>
                <td>${donor_weight_arr[i]}</td>
                <td>${donor_email_arr[i]}</td>
                <td>${donor_address_arr[i]}</td>
            </tr>`;
        }
    }
}

function deleteDonor(){
    var deleteDID = document.getElementById('deleteDID');
    var len = donor_id_arr.length;
    for(var i = 0; i < len; i++){
        if(deleteDID.value == donor_id_arr[i]){
            var index = donor_id_arr.indexOf(deleteDID.value);
        }
    }
}

function deletePatient(){
    var deletePID = document.getElementById('deletePID');
    var len = id_arr.length;
    for(var i = 0; i < len; i++){
        if(deletePID.value == id_arr[i]){
            var index = id_arr.indexOf(deletePID.value);
        }
    }
}