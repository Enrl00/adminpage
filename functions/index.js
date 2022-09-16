const functions = require("firebase-functions");
const { log } = require("firebase-functions/logger");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// exports.deleteUser = functions.firestore
//     .document('users/{userID}')
//     .onDelete((snap, context) => {
//       const deletedValue = snap.data();

//       console.log(deletedValue)
//     });
exports.modifyUser = functions.firestore
    .document('users/{userID}')
    .onWrite( async(change, context) => {
      const document = change.after.exists ? change.after.data() : null;
      const oldDocument = change.before.data();
      console.log(document, '---', oldDocument);
    });