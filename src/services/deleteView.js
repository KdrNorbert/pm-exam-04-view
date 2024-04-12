import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/init'

export default async function deleteView(id) {
    await deleteDoc(doc(db, 'views', id));
}
