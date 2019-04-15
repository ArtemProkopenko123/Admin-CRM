
import { storage } from '../../fbConfig';
import { saveInFirestore } from './fbCRUD'

function saveInStorage(data) {
    const metadata = {
        contentType: 'image/jpeg',
    };

    let fileName = "" + Date.now() + data.image.name;
    let storageRef = storage.ref().child(`images/${fileName}`).put(data.image, metadata); // use the Blob or File API

    storageRef.on(
        'state_changed',
        (snapshot) => {
            if (snapshot.bytesTransferred === snapshot.totalBytes) { console.log("DONE") }
        },
        (error) => console.error("ERROR: ", error),
        () => {
            storage.ref('images/').child(fileName).getDownloadURL().then((url) => {
                saveInFirestore(url, data.title, fileName, data.tooltipPosition);
            })
        }
    )
    return true;
}

export default saveInStorage;
