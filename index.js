var events = require("backbone-events-standalone");

events.onAll = function(callback,context){
  this.on("all", callback,context);
  return this;
};

// Mixin utility
events.mixin = function(proto) {
  var exports = ['on', 'once', 'off', 'trigger', 'onAll', 'stopListening', 'listenTo',
  'listenToOnce', 'bind', 'unbind'];
  for(var i=0; i < exports.length;i++){
    var name = exports[i];
    proto[name] = this[name];
  }
  return proto;
};

module.exports = events;
