import firebase from 'firebase/compat/app';

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      // dispatch because we call actions - here "getUserId"
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        // await - this method is async and returns promice
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')

        // create state in DB 
        // ref - we call from db table users field with uniq id, table info
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
