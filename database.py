import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore
# pip install firebase-admin google-cloud-firestore
cred = credentials.Certificate("./ServiceAccountKey.json")
app = firebase_admin.initialize_app(cred)

store = firestore.client()

# for reading from firestore database
doc_ref = store.collection(u'users').limit(2)

try:
    docs = doc_ref.get()
    for doc in docs:
        print(u'Doc Data:{}'.format(doc.to_dict()))
except google.cloud.exceptions.NotFound:
    print(u'Missing data')


# for writing to firestore database
doc_ref = store.collection(u'test')
doc_ref.add({u'name': u'test', u'added': u'just now'})


