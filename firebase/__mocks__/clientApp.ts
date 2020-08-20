import firebasemock from 'firebase-mock'

export const mockauth = new firebasemock.MockAuthentication()
export const mockdatabase = new firebasemock.MockFirebase()
export const mockfirestore = new firebasemock.MockFirestore()
export const mockstorage = new firebasemock.MockStorage()
export const mockmessaging = new firebasemock.MockMessaging()

export const mockFirebase = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  (path) => {
    return path ? mockdatabase.child(path) : mockdatabase
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth
  },
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore
  },
  // use null if your code does not use STORAGE
  () => {
    return mockstorage
  },
  // use null if your code does not use MESSAGING
  () => {
    return mockmessaging
  }
)

mockFirebase.initApp = jest.fn()

export default mockFirebase
