import {loadPage } from "../model/model.js";


function changeRoute() {
let hashTag = window.location.hash;
let pageID = hashTag.replace('#', '');

    loadPage(pageID);


}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

$(document).ready(function () {
    loadPage("home")
    initURLListener();
    
});