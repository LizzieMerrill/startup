//let i = 0;//modify when doing database
async function loadPost() {
    const response = await fetch("/api/post")
    const post = await response.json()
  
    // Modify the DOM to display the scores
  
    const tableBodyEl = document.querySelector('#post-table');
  
    //if (post.length) {
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
    // } else {
    //   tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to post something!</td></tr>';
    // }
  }
  
  loadPost();
  





//POST PRODUCT LISTING
function contentPost(){
    const postNum = document.querySelector("#post-number");
    localStorage.setItem("postNumber", postNum.value);
    const posterN = document.querySelector("#poster-name");
    localStorage.setItem("posterName", posterN.value);
    const postT = document.querySelector("#post-text");
    localStorage.setItem("postText", postT.value);
    const postD = document.querySelector("#post-date");
    localStorage.setItem("postDate", postD.value);
    

    let postStuff = {
        number: postNum,
        name: posterN,
        post: postT,
        date: postD
    }
  
    //if(sale listing == valid) {
      window.location.href = "post_view.html";
      //}
      //else{attempt failed, try again}
      loadPost()
  }