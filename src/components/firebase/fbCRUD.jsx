
import firebase from '../../fbConfig';

export function getData(key) {

    if (key) {
        return firebase.firestore().collection("files").doc(key).get().then((data) => { return data });
    }

}

export function saveInFirestore(url, title, name, tooltipPosition) {
    if (url && title && tooltipPosition) {
        let db = firebase.firestore().collection('files');
        db.add({
            url,
            title,
            name,
            tooltipPosition
        }).then((docRef) => {
            console.log(docRef);

        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    }
    return true
}

export function updateInFirestoreByKey(data, key) {
    if (data.title && data.tooltipPosition) {
        let db = firebase.firestore().collection('files').doc(key);
        return db.update({
            title: data.title,
            tooltipPosition: data.tooltipPosition
        }).then(() => {
            return true;
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
                return false;
            })
    }

}
export function deleteInFirestoreByKey(key) {
    firebase.firestore().collection('files').doc(key).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}
