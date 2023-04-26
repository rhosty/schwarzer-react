// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, writeBatch, query, getDocs, doc } from 'firebase/firestore';
import {getFirestore, getDoc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmVzVgiZiF3Vil64WpgDT7-ljriuogS04",
  authDomain: "brennerei.firebaseapp.com",
  projectId: "brennerei",
  storageBucket: "brennerei.appspot.com",
  messagingSenderId: "18101718507",
  appId: "1:18101718507:web:8322845899b47b74f9ddae",
  measurementId: "G-ST9WBKTM9Z"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);



// // //fetching a document from firebase
//  const getDocuments = async (items, docId) => {
//     const docRef = doc(db, items, docId);
//     const docSnap = await getDoc(docRef);
    
//     if (docSnap.exists()) {
//         console.log(docSnap)
//         return docSnap.data();
//     } else {
//         console.log('fucked')
//         return null;
//     }
//     }

    //call getDocuments

 
    

    export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
        const collectionRef = collection(db, collectionKey);
        const batch = writeBatch(db);
        objectsToAdd.forEach((object) => {
          const docRef = doc(collectionRef, object.title.toLowerCase());
          batch.set(docRef, object);
        });
         await batch.commit();
         console.log('done')
      }

      export const getCategorisAndDocs = async () => {
        const categoriesRef = collection(db, 'items');
      const q = query(categoriesRef);
      const querySnapshot = await getDocs(q);
      const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title] = items;
        return acc;
      }, {});
      
      return categoryMap;
      
      }
      
