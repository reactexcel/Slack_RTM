//author: manish

var session = {};

function start(id){
  session[id] = {};
  session[id].start = time()
  session[id].timeout = setTimeout( function() {
      destory(id); //auto expire after 5sec
  },5000)
}

function exists(id){
  return session[id] ? true : false
}

function set(id,key,value){
  if(session[id]){
    session[id].key = value;
  }else{
      //doesnt exist throw error
  }
}

function get(id,key){
  if(session[id]){
    return session[id].key;
  }else{
      //doesnt exist throw error
  }
}

function touch(id){
  if(session[id]){
    session[id].start = time();
    clearTimeout(session[id].timeout)
    session[id].timeout = setTimeout( function() {
        destory(id); //auto expire after 5sec
    },5000)
  }else{
      //doesnt exist throw error
  }
}

function destory(id){
   session[id] = {}
   delete session[id]
}

