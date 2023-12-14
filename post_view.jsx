import React from 'react';

export function Post_View() {
  return (
    <main>
      <pre>Chuck Norris Joke Generator</pre>
        <form id="post-fields">
            <label for="post-number">Post Number:</label><br/>
            <input type="text" id="post-number" name="post-number" placeholder="Post number"/><br/>
            <label for="poster-name">Name:</label><br/>
            <input type="text" id="poster-name" name="poster-name" placeholder="Enter name"/><br/>
            <label for="post-text">Post:</label><br/>
            <input type="text" id="post-text" name="post-text" placeholder="Enter post"/>
            <label for="post-date">Date:</label><br/>
            <input type="text" id="post-date" name="post-date" placeholder="Today's date"/>
          </form>
          <br/><br/>
        <button className="post-btn" onclick="contentPost()">Post</button>
        <br/><br/><br/>
        <div style="overflow-y:auto;">
        <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Post</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody id="post-table"></tbody>
          </table>
        </div>
    </main>
  );
}