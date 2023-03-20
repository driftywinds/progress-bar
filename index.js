"use strict";

const UPDATES_PER_SECOND = 30;

document.addEventListener('DOMContentLoaded', () => {
  const $title = $('#title');
  const $tabname = $('#tabname');
  const $bar = $('#progress-bar');
  const $percentage = $('#progress-percentage');


  setInterval(() => {
    const percentage = getProgress('startdate','enddate');
    $tabname.innerText = GetURLParameter('title');
    $title.innerText = GetURLParameter('title');
    $bar.style.setProperty('width', `${percentage}%`);
    $percentage.innerText = percentage.toFixed(10);
  }, 1000 / UPDATES_PER_SECOND);
});

// Helpers

const $ = (selector) => document.querySelector(selector);

function getYearProgress() {
  const year = new Date().getFullYear();
  const startdate = new Date(year,0,1,0,0,0,0);
  const enddate = new Date(year+1,0,1,0,0,0,0);
  const percentage = getProgress(startdate, enddate);
  return percentage;
};

function getProgress(startdateparam, enddateparam) {
  const startdate = parsedate(GetURLParameter(startdateparam));
  const enddate = parsedate(GetURLParameter(enddateparam));
  const percentage = 100 * ((Date.now() - startdate) / (enddate - startdate));
  return percentage;
};

function parsedate(yyyydashmmdashdd) {
  const parseddate = new Date(yyyydashmmdashdd);
  return parseddate;
};

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1].replace("%20"," ");
        };
    };
};