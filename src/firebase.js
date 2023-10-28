import { initializeApp} from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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

const db = getFirestore(app)


export const sendOrderToFirestore = async (orderData) => {
  try {
    // Agregar la orden a la colección "pedidos" utilizando la instancia de db existente
    const docRef = await addDoc(collection(db, "pedidos"), orderData);

    console.log("Orden de compra enviada a Firestore con ID:", docRef.id);

    return docRef.id; // Puedes devolver el ID de la orden si es necesario
  } catch (error) {
    console.error("Error al enviar la orden de compra a Firestore:", error);
    throw error;
  }
};

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
  
