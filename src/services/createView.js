import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/init';

export async function createView(formData) {
    const docRef = await addDoc(collection(db, 'views'), formData);
    return docRef.id;
  }