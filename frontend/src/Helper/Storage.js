//using Storage function to manipulate data (ie. dashboard, userSigin, userlogOut)

//  simialr to setter/ getter when using useState ex. const [ signIn, setSignIn] = useState({})
//The get syntax binds an object property to a function that will be called when that property is looked up.

const Storage = {
    get: (key) => {
        return localStorage.getItem(key);
    },
    set: (key, value) => {
        localStorage.setItem(key, value);
    },
    clear: () => {
        localStorage.clear();
    },
    //example of logout
    // logout: () => {
    //     localStorage.removeItem("username");
    // } 
};

export default Storage;
