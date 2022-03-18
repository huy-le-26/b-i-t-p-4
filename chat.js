import { ConversationList } from "./coversationList.js";


class Chat {
    container = document.createElement("div");
    logout = document.createElement("button") 
    conversationList = new ConversationList();

    constructor(){

      this.container.appendChild(this.conversationList.container);
        // this.container.innerHTML="chat"
        // this.logout.innerHTML="log out"
        // this.container.appendChild(this.logout)
    
        // this.logout.addEventListener("click" , this.handleLogout )
          
  }

    handleLogout = (e) => {
        firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("Sign out");
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
    };
}
    

export{ Chat };