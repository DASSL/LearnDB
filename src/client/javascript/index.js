/**
 * index.js - LearnDB
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
    // Stop page reload on submit
    event.preventDefault();

    let host=$('#host').val();
    let port= $('#port').val();
    let database= $('#database').val();
    let username=$('#username').val();
    let currentPassword= $('#currentPassword').val();
    let newPassword=$('#newPassword').val();
    let confirmNewPassword=$('#confirmNewPassword').val();

    if (newPassword !== confirmNewPassword) {
      $("#alert").replaceWith(`
        <div class="col-sm-12 alert alert-danger text-center" role="alert" id="failed">
          <p><strong>The new password and its confirmation do not match</strong></p>
        </div>
      `);
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
        "confirmNewPassword": confirmNewPassword,
      }),
      processData: false,
      type: 'POST',
      contentType: 'application/json',
      success: function (res) {
        $("#alert").replaceWith(`
          <div class="col-sm-12 alert alert-success text-center" role="alert" id="alert">
              <p><strong>${res.data}</strong></p>
          </div>
        `);
      },
      error: function (res) {
        $("#alert").replaceWith(`
          <div class="col-sm-12 alert alert-danger text-center" role="alert" id="alert">
              <p><strong>${res.responseJSON.message}</strong></p>
          </div>
        `);
      }
    });

  });
})
