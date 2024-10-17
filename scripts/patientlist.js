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

var name_arr = [], id_arr = [], blood_group_arr = [], age_arr = [], weight_arr = [], email_arr = [], address_arr = [];

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

getPatientsData();

function patientList(){
    var tableCont = document.getElementById('tableCont');
    var len = id_arr.length;
    for(var i = 0; i < len; i++){
        tableCont.innerHTML += `
        <tr>
            <td>${name_arr[i]}</td>
            <td>${id_arr[i]}</td>
            <td>${blood_group_arr[i]}</td>
            <td>${age_arr[i]}</td>
            <td>${weight_arr[i]}</td>
            <td>${email_arr[i]}</td>
            <td>${address_arr[i]}</td>
        </tr>`;
    }
}

setTimeout("patientList();", 3000);