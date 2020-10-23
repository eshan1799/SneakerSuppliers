const url = "http://localhost:5000";

const addPosts = (posts) => ({
  type: "ADD_POSTS",
  payload: posts,
});

export const registerUser = (details) => {
  return (async) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(details),
      };
        fetch(`${url}/register`, options)
            .then((r) => r.json())
            .then((data) => {
            if (data.status == 200) {
                alert(`Welcome ${data.username}, please log in`);
                window.location = `/login`;
            } else {
                alert(data);
            }
            })
    } catch (err) {
      console.warn(err.message);
    }
  };
};

export const login = (details) => {
  return async (dispatch) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(details),
      };
        fetch(`${ url }/login`, options)
          .then((r) => r.json())
          .then((data) => {
            if (data.token) {
              console.log(data.token);
              localStorage.setItem("user", data.token);
              window.location='/';
            } else {
              console.log(data);
              alert(data);
            }
          });
    } catch (err) {
      console.warn(err.message);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: { Authorization: `Bearer ${ localStorage.getItem("user") }` },
      };
      const response = await fetch(`${ url }/posts/`, options);
      const posts = await response.json();
      console.log(posts)
      dispatch(addPosts(posts));
    } catch (err) {
      console.warn(err.message);
    }
  };
};

export const submitNewPost = (postInfo) => {
  return (async) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(postInfo),
      };
        fetch(`${url}/posts/`, options)
          .then((r) => r.json())
          .then((data) => {
            if (data.status == 200) {
              alert(`Post Submitted`);
              // window.location = `/login`;
            } else {
              alert(data);
            }
          })
    } catch (err) {
      console.warn(err.message);
    }
  };
};