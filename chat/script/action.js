import {db, ref, set, update, push, onChildAdded} from "./configfirebase.js"; 
// 
const refUsersIds = ref(db, 'users/')
// 

function addContact(userId, contactName, contactId){
    update(ref(db, 'users/' + userId + '/contacts/' + contactId), {
        contactName: contactName   
    })
}

export function setAllUsersAsContacts() {
    const refUsersIds = ref(db, 'users/')
    // Retrieve all users' data
    onChildAdded(refUsersIds, (snapshot) => {
        const userId = snapshot.val().userId;

        // Set each user as a contact for all other users
        onChildAdded(refUsersIds, (childSnapshot) => {
            const contactId = childSnapshot.val().userId;
            const contactName = childSnapshot.val().username;
            if (contactId !== userId) { // Exclude the user itself as a contact
                addContact(userId, contactName, contactId);
            }
        });
    });
}
// ______________________________________


export function menu(){
    if(document.getElementById("link-menu").style.display == "none"){
    document.getElementById("link-menu").style.display = "flex";
    } else {
    document.getElementById("link-menu").style.display = "none";
    };
    // EXECUTA A ANIMAÇÃO DA TELA DE LOGIN E ATIVA O ZINDEX
};

export function animacao(mudar, t_login, t_cadastrar){
    t_login.style.zIndex = "-1";
    mudar.style.left = "400px";
    t_cadastrar.style.zIndex = "-1";
    
    mudar.style.transition ="2s"
    
    mudar.style.zIndex = "5";
    
    mudar.addEventListener('transitionend', function() {
        t_cadastrar.style.zIndex = "1";
    });
};

export function writeUserData(username, email, pwd) {
    const min = 1000000000;
    const max = 9999999999;
    const userId = Math.floor(Math.random() * (max - min)) + min;
    // const imageURL = URL.createObjectURL(imagem[0])

    set(ref(db, 'users/' + userId), {
        username: username,
        userId: userId,
        email: email,
        pwd: pwd,
    });
}
//

export {push, set, onChildAdded, ref, db}