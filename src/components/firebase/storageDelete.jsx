
import { storage } from '../../fbConfig';
import { deleteInFirestoreByKey } from './fbCRUD';

const DeleteFile = (id, key) => {


  let storageRef = storage.ref().child('images/');
  // Create a reference to the file to delete
  var desertRef = storageRef.child(id);

  // Delete the file
  desertRef.delete().then(function () {
    // File deleted successfully
    deleteInFirestoreByKey(key);
  }).catch(function (error) {
    // Uh-oh, an error occurred!
  });
}


export default DeleteFile;