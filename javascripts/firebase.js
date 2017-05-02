var FbAPI = (() => {

  let todos = [];



  return {


      firebaseCreds : () => {
     			return new Promise((resolve, reject) => {
     				$.ajax("apiKeys.json" )
     				.done((data) => {
              console.log("firebase js", data);
     					resolve(data);
     				})
     				.fail((error) => {
              console.log("firebase js", error);
     					reject(error);
     				});
     		});

      }
  };


})();
