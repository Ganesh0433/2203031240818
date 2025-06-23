const axios = require('axios');

function logEvent(stack, level, pkg, message) {
  axios.post('http://20.244.56.144/evaluation-service/logs', {
    stack,
    level,
    package: pkg,
    message
  }).then(res => {
    console.log(' Log success:', res.status);
  }).catch(err => {
    console.error('Log failed:', err.message);
  });
}

module.exports = logEvent;
