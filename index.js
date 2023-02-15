"use strict";

const UPDATES_PER_SECOND = 30;

document.addEventListener('DOMContentLoaded', () => {
  const $title = $('#title');
  const $bar = $('#progress-bar');
  const $percentage = $('#progress-percentage');

  setInterval(() => {
    const percentage = getLifeProgress();
    $title.innerText = 'Memento Mori';
    $bar.style.setProperty('width', `${percentage}%`);
    $percentage.innerText = percentage.toFixed(10);
  }, 1000 / UPDATES_PER_SECOND);
});

// Helpers

const $ = (selector) => document.querySelector(selector);

function getYearProgress() {
  const year = new Date().getFullYear();
  const start = new Date(year,0,1,0,0,0,0);
  const end = new Date(year+1,0,1,0,0,0,0);
  const percentage = 100 * ((Date.now() - start) / (end - start));
  return { year, percentage };
};

function getLifeProgress() {
  const born = new Date(1986,2,21);
  const death = new Date(2064,6,15);
  const percentage = 100 * ((Date.now() - born) / (death - born));
  return percentage;
}