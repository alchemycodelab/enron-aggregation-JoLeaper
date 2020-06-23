module.exports = [
  {
    '$project': {
      '_id': '$_id', 
      'sentTo': '$headers.To'
    }
  }, {
    '$unwind': {
      'path': '$sentTo'
    }
  }, {
    '$group': {
      '_id': '$sentTo', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
