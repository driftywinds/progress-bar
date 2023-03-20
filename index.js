"use strict";

var UPDATES_PER_SECOND = 30;

document.addEventListener('DOMContentLoaded', () => {
  var $title = $('#title');
  var $bar = $('#progress-bar');
  var $percentage = $('#progress-percentage');

  setInterval(() => {
    var { year, percentage } = getYearProgress();
    $title.innerText = year;
    $bar.style.setProperty('width', `${percentage}%`);
    $percentage.innerText = percentage.toFixed(10);
  }, 1000 / UPDATES_PER_SECOND);
});

// Helpers

var $ = (selector) => document.querySelector(selector);

function getYearProgress() {
  var year = new Date().getFullYear();
  var start = new Date(year,0,1,0,0,0,0);
  var end = new Date(year+1,0,1,0,0,0,0);
  var percentage = 100 * ((Date.now() - start) / (end - start));
  return { year, percentage };
}
