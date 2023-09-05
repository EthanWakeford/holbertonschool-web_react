import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<span id="logo"></span>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  let count = 0;
  return () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

const counter = updateCounter();
$('button').on('click', _.debounce(counter, 500));
