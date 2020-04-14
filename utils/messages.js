const moment = require('moment');
moment().utcOffset("+05:30").format()

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
