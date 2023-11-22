import db from "@services/firestore";
import {
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection
} from 'firebase/firestore';

export const getUsers = async () => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return users;
}

export const findUser = async (email) => {
  const users = await getUsers();
  return users.find(user => user.email === email);
}

export const createUser = async (data) => {
  const docRef = await addDoc(collection(db, "users"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const updateUser = async (id, data) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const deleteUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  await deleteDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}