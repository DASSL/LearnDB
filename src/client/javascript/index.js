/**
 * index.css - LearnDB
 *
 * Kevin Kelly
 * Data Science & Systems Lab (DASSL)
 * https://dassl.github.io/
 * 
 * (C) 2019- DASSL. ALL RIGHTS RESERVED.
 * Licensed to others under CC 4.0 BY-SA-NC
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 * 
 * PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * 
 * This file contains the functions needed for the index.html page
 * 
 */


$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        //collect the form data using Id Selector what ever data you need to send to server
        let host=$('#host').val();
        let port= $('#port').val();
        let database= $('#database').val();
        let username=$('#username').val();
        let currentPassword= $('#currentPassword').val();
        let newPassword=$('#newPassword').val();
        let confirmNewPassword=$('#confirmNewPassword').val();

        if (newPassword !== confirmNewPassword) {
            alert('New Passwords do not match');
            return;
        }

        $.ajax({
            url: './users/change-password',
            data: JSON.stringify({
                "host": host,
                "port": port,
                "database": database,
                "username": username, 
                "currentPassword": currentPassword,
                "newPassword": newPassword,
            }),
            processData: false,
            type: 'POST',
            contentType: 'application/json',
            success: function (data) {
                alert(data);
            }
        });


    });
})