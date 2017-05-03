var FbApi = ((cats) => {
  cats.registerUser = (credentials) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, crendetials.password).then(() => {
          resolve(authData);
        }).catch((error) => {
          console.log("user email password", error);
          reject(error);
        });
    });
  };

  cats.loginUser = (creds) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword()
      .then((authData) => {
        resolve(authData);
      }).catch((error) => {
        reject(error);
      });
    });
  };
  return cats;
})(FbApi || {});
