export function logEvent(stack, level, pkg, message) {
  fetch('http://20.244.56.144/evaluation-service/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      stack,
      level,
      package: pkg,
      message
    })
  })
  .then(res => console.log('Log sent from frontend:', res.status))
  .catch(err => console.error(' Frontend log failed:', err.message));
}
