import db from "@services/firestore";
import {
  doc,
  where,
  query,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection
} from 'firebase/firestore';

export const getStores = async () => {
  const stores = [];
  const querySnapshot = await getDocs(collection(db, "stores"));

  querySnapshot.forEach((doc) => {
    stores.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return stores;
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

export const searchStore = async (name) => {
  const filteredShop = [];
  const shops = await getStores();
  const targetName = name.toLowerCase();

  shops.forEach((shop) => {
    const shopName = shop.name.toLowerCase();
    if (shopName.search(targetName) !== -1) filteredShop.push(shop);
  })

  return filteredShop;
}
