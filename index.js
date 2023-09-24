
function addingEventListener() {

    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);

}



//binds an event listener in addingEventListener():

