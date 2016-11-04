var express = require('express');
var router = express.Router();
var request = require('request');
var fruits = [122];
console.log(fruits)
var attendance = '[{ "pretext": "text world", "text":"'+fruits+'" , "fallback": "Message Send to Employee","color": "#36a64f"}]'
console.log(attendance)

request({
    url: 'https://slack.com/api/chat.postMessage', //URL to hit
    method: 'POST',
    qs: {"token": process.env.SLACK_API_TOKEN || '', "channel": "D2W9E51FU","attachments":attendance},
}, function (error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});


// request({
//     url: 'http://excellencemagentoblog.com/slack_dev/hr/attendance/API_HR/api.php', //URL to hit
//     method: 'POST',
//     qs: {"action":'get_my_leaves', "userslack_id": "U1P4ZLFPB"}
// }, function (error, response, body) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });
// request({
//     url: 'http://excellencemagentoblog.com/slack_dev/hr/attendance/API_HR/api.php', //URL to hit
//     method: 'POST',
//     body: JSON.stringify({"action":'get_my_leaves', "userslack_id": "D2W9E51FU"})
// }, function (error, response, body) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });

module.exports = router;