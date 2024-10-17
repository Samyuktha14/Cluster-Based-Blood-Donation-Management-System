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

getDonorsData();

function donorList(){
    var tableCont = document.getElementById('tableCont');
    var len = donor_id_arr.length;
    for(var i = 0; i < len; i++){
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

setTimeout("donorList();", 3000);
