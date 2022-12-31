"use strict";

class Commentt {
  post_id = "";
  user_id = "";
  content = "";
  api_url = "https://631cc128789612cd07a06be0.mockapi.io";

  create() {
    let data = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content,
    };

    data = JSON.stringify(data);
    fetch(this.api_url + "/coments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Postavljen komentar");
      });
  }

  async get(post_id) {
    let api_url = this.api_url + "/coments";
    const response = await fetch(api_url);
    const data = await response.json();
    let post_comments = [];

    data.forEach((item) => {
      if (item.post_id === post_id) {
        post_comments.push(item);
      }
    });

    return post_comments;
  }
}
