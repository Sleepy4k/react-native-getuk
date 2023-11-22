import db from "@services/firestore";
import {
  where,
  query,
  addDoc,
  getDoc,
  getDocs,
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
  const querySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", email)));
  const user = querySnapshot.docs[0];

  if (!user) return null;

  return {
    id: user.id,
    ...user.data()
  };
}

export const createUser = async (data) => {
  const docRef = await addDoc(collection(db, "users"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}
