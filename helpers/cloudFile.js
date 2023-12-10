import { netinfo } from "@helpers";
import storage from "@services/storage";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "@firebase/storage";

const initConnection = async () => {
  const connection = await netinfo.getNetworkInfo();
  return connection;
}

export const uploadFile = async (file) => {
  const ethernet = await initConnection();
  if (!ethernet.isConnected || !ethernet.isInternetReachable) return;

  const imgName = "img-" + new Date().getTime() + ".png";
  const storageRef = ref(storage, imgName);
  const metadata = {
    contentType: "image/png"
  };

  await uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log(`Uploaded a blob or file! ${JSON.stringify(snapshot.metadata)}`);
  }).catch((error) => {
    console.log(`error while upload file: ${error}`);
  });

  return imgName;
}

export const getFile = async (fileName) => {
  const ethernet = await initConnection();
  if (!ethernet.isConnected || !ethernet.isInternetReachable) return;

  const storageRef = ref(storage, fileName);

  return await getDownloadURL(storageRef).then((url) => {
    return url;
  }).catch((error) => {
    console.log(`error while get file: ${error}`);
  })
}

export const deleteFile = async (fileName) => {
  const ethernet = await initConnection();
  if (!ethernet.isConnected || !ethernet.isInternetReachable) return;

  const storageRef = ref(storage, fileName);

  await deleteObject(storageRef).then(() => {
    console.log(`File ${fileName} deleted`);
  }).catch((error) => {
    console.log(`error while delete file: ${error}`);
  })
}
