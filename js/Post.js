class Post {
  post_id = "";
  post_content = "";
  user_id = "";
  likes = "";
  api_url = "https://62d567b615ad24cbf2c65a55.mockapi.io";

  async create(post_content) {
    let session = new Session();
    session_id = session.getSession();

    let data = {
      user_id: this.session_id,
      content: this.post_content,
      likes: 0,
    };

    data = JSON.stringify(data);

    let response = await fetch(this.api_url + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    data = await response.json();

    return data;
  }
  async getAllPosts() {
    let response = await fetch(this.api_url + "/posts");
    let data = await response.json();
    return data;
  }

  like(post_id, likes) {
    let data = {
      likes: likes,
    };

    data = JSON.stringify(data);

    fetch(this.api_url + "/posts/" + post_id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }).then((response) => response.json());
  }

  delete(post_id) {
    fetch(this.api_url + "/posts/" + post_id, {
      method: "DELETE",
    }).then((response) => response.json());
  }
}
