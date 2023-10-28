import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3oBknkKmPDmcbQD6ElKn3FUahj0v3MPA",
  authDomain: "react-app-63013.firebaseapp.com",
  projectId: "react-app-63013",
  storageBucket: "react-app-63013.appspot.com",
  messagingSenderId: "72796768674",
  appId: "1:72796768674:web:39d448627cf65549548afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export function getProducts() {
    return db.collection('items').get()
      .then(querySnapshot => {
        const products = [];
        querySnapshot.forEach(doc => {
          products.push(doc.data());
        });
        return products;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        return [];
      });
  }
  
