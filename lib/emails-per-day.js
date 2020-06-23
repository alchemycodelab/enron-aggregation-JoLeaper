module.exports = [
  {
    '$project': {
      '_id': {
        '$dayOfYear': '$headers.Date'
      }
    }
  }, {
    '$group': {
      '_id': '$_id', 
      'emailsPerDay': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'avg': {
        '$avg': '$emailsPerDay'
      }, 
      'min': {
        '$min': '$emailsPerDay'
      }, 
      'max': {
        '$max': '$emailsPerDay'
      }
    }
  }
];
