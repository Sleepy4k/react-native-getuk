import db from "@services/firestore";
import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection
} from 'firebase/firestore';

export const getStores = async () => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "stores"));

  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return users;
}

export const findStore = async (id) => {
  const docRef = doc(db, "stores", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    };
  } else {
    return null;
  }
}

export const createStore = async (data) => {
  const docRef = await addDoc(collection(db, "stores"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const updateStore = async (id, data) => {
  const docRef = doc(db, "stores", id);
  await updateDoc(docRef, data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const deleteStore = async (id) => {
  const docRef = doc(db, "stores", id);
  const docSnap = await getDoc(docRef);
  await deleteDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}
