'use strict';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTKtEAER9MBDxpX2CCVPmqeIC9TsD4Cqk",
    authDomain: "myfirebasechatapp-1725a.firebaseapp.com",
    databaseURL: "https://myfirebasechatapp-1725a-default-rtdb.firebaseio.com",
    projectId: "myfirebasechatapp-1725a",
    storageBucket: "myfirebasechatapp-1725a.appspot.com",
    messagingSenderId: "114963676500",
    appId: "1:114963676500:web:4bcb1d43fade475c8c5cc1",
    measurementId: "G-2XK5KP7LDZ"
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const collection = db.collection('messages');

    $('#send').on('click',function(){
        collection.add({
            username: $('#username').val(),
            text: $('#text').val(),
            created: firebase.firestore.FieldValue.serverTimestamp()
        });
        $('#username').val('');
        $('#text').val('');

        })

        collection.orderBy('created').onSnapshot(snapshot=>{
            let v = '';
            snapshot.forEach((doc)=>{
                let data = doc.data();
                v= '<dl><dt>' + data.username + '</dt><dd>' + data.text +'</dd></dl>'; 
                //let str = '<dl><dt>' + data.username + '</dt><dd>' + data.text +'</dd></dl>';
                $('#output').append(v);
                console.log(v);
            });


    });




