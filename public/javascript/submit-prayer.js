async function prayerFormHandler(event) {
    event.preventDefault();
  
    const prayer = document.querySelector('input[name="prayer"]').value.trim();
    const name = document.querySelector('input[name="name"]').value.trim();
  
    // if (username && password) {
      const response = await fetch('/api/prayers', {
        method: 'post',
        body: JSON.stringify({
          prayer,
          name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/');
    //   } else {
    //     alert(response.statusText);
    //   }
    }
  }
  
  document.querySelector('#submitButton').addEventListener('click', prayerFormHandler);
  