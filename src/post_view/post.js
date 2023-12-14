//let i = 0;//modify when doing database
async function loadPost() {
    const response = await fetch("/api/getpost")
    const post = await response.json()
  
    // Modify the DOM to display the scores
  
    const tableBodyEl = document.querySelector('#post-table');
  
    if (post.length) {
      for (const [i, postStuff] of post.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const postTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = postStuff.number;
        nameTdEl.textContent = postStuff.name;
        postTdEl.textContent = postStuff.post;
        dateTdEl.textContent = postStuff.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(postTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to post something!</td></tr>';
    }
  }
  
  loadPost();
  





//POST PRODUCT LISTING
async function contentPost(){
    const postNum = document.querySelector("#post-number");
    localStorage.setItem("postNumber", postNum.value);
    const posterN = document.querySelector("#poster-name");
    localStorage.setItem("posterName", posterN.value);
    const postT = document.querySelector("#post-text");
    localStorage.setItem("postText", postT.value);
    const postD = document.querySelector("#post-date");
    localStorage.setItem("postDate", postD.value);
    

    let postStuff = {
      number: postNum.value,
      name: posterN.value,
      post: postT.value,
      date: postD.value
  }
    //if(sale listing == valid) {
      
      //}
      //else{attempt failed, try again}
      //loadPost()

      try {
        const response = await fetch('/api/setpost', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(postStuff),
        });
  
        // Store what the service gave us as the high scores
        const posts = await response.json();
        localStorage.setItem('posts', JSON.stringify(posts));
      } catch {
        // If there was an error then just log it onto the console
        console.log('We could not post your content, try again!');
      }


      loadPost()
      //window.location.href = "post_view.html";
  }


  // try {
  //   const response = await fetch('/api/setpost', {
  //     method: 'POST',
  //     headers: {'content-type': 'application/json'},
  //     body: JSON.stringify(postStuff),
  //   });

  //   // Store what the service gave us as the high scores
  //   const posts = await response.json();
  //   localStorage.setItem('posts', JSON.stringify(posts));
  // } catch {
  //   // If there was an error then just log it onto the console
  //   console.log('We could not post your content, try again!');
  // }


const url = "https://api.chucknorris.io/jokes/random";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = JSON.stringify(
      response.value
    );
  });
