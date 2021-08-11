console.log('sw1');
this.addEventListener('message', function (event) {
    console.log('222');
    
    event.source.postMessage('this message is from sw1.js, to page');
  });