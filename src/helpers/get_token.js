export default function get_token(token_name) {
    return new Promise(async(resolve,reject)=>{
                  let config = {};

                 let token = localStorage.getItem("user_token");
                 console.log(token);
                 if (token !== null) {
                config.headers = { authorazation: "Bearer " + token }

resolve(config.headers);
                 }    
})
}
