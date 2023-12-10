import db from "@services/firestore";
import {
  addDoc,
  getDoc,
  collection
} from 'firebase/firestore';

export const createNetwork = async (data) => {
  const docRef = await addDoc(collection(db, "networks"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}
