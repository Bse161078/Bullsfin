import { storage } from "./config";
import firebase from "firebase";

/**
 * @param {String} path default 'Products'
 * @param {FileList} imageFileList
 * @returns array of URLS of uploaded images
 */
export async function getAllOfCollection(
  collection,
  page,
  filter = false,
  filterCondition,
  ProductPerPage
) {
  let data = [];
  let querySnapshot = null;

  if (filter) {
    querySnapshot = await firebase
      .firestore()
      .collection(collection)
      .where("userid", "!=", filterCondition)
      .get();
  } else {
    querySnapshot = await firebase
      .firestore()
      .collection(collection)
      .limit(page)
      .get();
  }
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      data.push({ ...doc.data(), id: doc.id });
    } else {
      console.log("No document found!");
    }
  });
  return data;
}
export const socialMediaAuth = async (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};
export async function saveData(collection, doc, jsonObject) {
  await firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .catch(function (error) {
      console.error("Error writing document: ", error);
      return false;
    })
    .then(() => {
      return true;
    });
}
export const updateDoc = async (collection, doc, field) => {
  let updated = false;
  await firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    .update(field)
    .catch(function (error) {
      console.error("Error writing document: ", error);
      updated = false;
    })
    .then(() => {
      updated = true;
    });
  return updated;
};

export const multiImageUpload = async (path = "Products", imageFileList) => {
  let imagesUrlArray = [];
  let imageUrl = "";
  // array of files
  let arr = imageFileList.map((item) => {
    return item.originFileObj;
  });

  for (let i = 0; i < arr.length; i++) {
    const upload = await storage.ref(`/${path}/${arr[i].name}`).put(arr[i]);
    imageUrl = await upload.ref.getDownloadURL();
    imagesUrlArray.push(imageUrl);
  }

  return imagesUrlArray; // array of URLS of uploaded files
};
export const getUserByID = async (ids) => {
  await firebase
    .firestore()
    .collection("users")
    .where(
      "userId",
      "==",
      ids.map((el) => el)
    )
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};
/**
 * @description Uploads image to firebase storage
 * @param {String} path
 * @param {File} imageFile
 * @returns URL of uploaded image
 */
export const singleImageUpload = async (path, imageFile) => {
  const upload = await storage
    .ref(`/${path}/${imageFile?.name}`)
    .put(imageFile);
  const imageUrl = await upload.ref.getDownloadURL();
  return imageUrl;
};

/**
 * @description Delete images from firebase storage
 * @param {Array} imageUrlArray Array of image urls to delete
 */
export const deleteStorageFiles = async (imageUrlArray) => {
  if (!Array.isArray(imageUrlArray)) {
    console.log("Parameter must be array.");
    return false;
  }
  let arr = [...imageUrlArray];
  for (let i = 0; i < arr.length; i++) {
    await storage
      .refFromURL(arr[i])
      .delete()
      .then(() => {
        console.log("File deleted.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};
async function newFunction(id, usersArray) {
  await firebase
    .firestore()
    .collection("users")
    .get()
    .then((users) => {
      // users.filter(x=>x.id==id)
      // const usersfilter = id.includes(users.id)
      users.forEach((user) => {
        if (id.includes(user.id)) {
          let obj = user.data();
          obj.id = user.id;
          usersArray.push(obj);
        }
      });
    });
  return usersArray;
}
