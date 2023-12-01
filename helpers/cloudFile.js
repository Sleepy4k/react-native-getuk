import storage from "@services/storage";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "@firebase/storage";

export const uploadFile = (file) => {
  const imgName = "img-" + new Date().getTime() + ".png";
  const storageRef = ref(storage, imgName);
  const metadata = {
    contentType: "image/png"
  };

  const uploadTask = uploadBytes(storageRef, file, metadata);

  uploadTask.then((snapshot) => {
    console.log(`Uploaded a blob or file! ${snapshot}`);
  });

  return imgName;
}

export const getFile = async (fileName) => {
  const storageRef = ref(storage, fileName);

  return await getDownloadURL(storageRef).then((url) => {
    return url;
  }).catch((error) => {
    console.log(`error while get file: ${error}`);
  })
}

export const deleteFile = async (fileName) => {
  const storageRef = ref(storage, fileName);

  deleteObject(storageRef).then(() => {
    console.log(`File ${fileName} deleted`);
  }).catch((error) => {
    console.log(`error while delete file: ${error}`);
  })
}
