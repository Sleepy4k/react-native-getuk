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

export const getReview = async (id) => {
  const reviews = [];
  const querySnapshot = await getDocs(query(collection(db, "reviews"), where("store", "==", id)));

  querySnapshot.forEach((doc) => {
    reviews.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return reviews;
}

export const ratingReview = async (id) => {
  let rating = 0;
  const querySnapshot = await getDocs(query(collection(db, "reviews"), where("store", "==", id)));

  if (querySnapshot.size < 1) return {
    totalData: 0,
    totalRating: 0
  };

  querySnapshot.forEach((doc) => {
    rating += Number(doc.data().rating)
  });

  return {
    totalData: querySnapshot.size,
    totalRating: rating
  };
}

export const findReview = async (email) => {
  const querySnapshot = await getDocs(query(collection(db, "reviews"), where("email", "==", email)));
  const review = querySnapshot.docs[0];

  if (!review) return null;

  return {
    id: review.id,
    ...review.data()
  };
}

export const createReview = async (data) => {
  const docRef = await addDoc(collection(db, "reviews"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const updateReview = async (id, data) => {
  const docRef = doc(db, "reviews", id);
  await updateDoc(docRef, data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const deleteReview = async (id) => {
  const docRef = doc(db, "reviews", id);
  const docSnap = await getDoc(docRef);
  await deleteDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const massDeleteReview = async (id) => {
  const querySnapshot = await getDocs(query(collection(db, "reviews"), where("store", "==", id)));

  querySnapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });

  return true;
}
