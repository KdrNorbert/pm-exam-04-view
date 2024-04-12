import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/init';

export default async function readProducts() {

    const querrySnapshot = await getDocs(collection(db, "views"))

    const products = [];

    querrySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
}