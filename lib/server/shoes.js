
/*
 * Socket
 * socket :: io .socket
 * cleint :: redis cleint
 */

var message = function(shoe){
  return shoe(function(steam) {
    console.log(steam);

    steam.on('data', function(data){
      /* data {
      *  roomId :: ObjectId
      *  playerId :: ObjectId
      *  messageBlob
      *  timestamp
      * }
      *
      */
    });

    steam.on('close', function() {
      console.log('connection closed');
    });

  });
};

var move = function(shoe){
  return shoe(function(stream) {
    console.log(steam);
  });
};


module.exports = function(shoe) {
  return {
      message: message(shoe)
    , move: move(shoe)
  }
}
