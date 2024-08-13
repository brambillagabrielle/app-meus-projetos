import { auth, db } from '../../firebaseConfig';
import {
    doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where
} from "firebase/firestore";

export const getProjetosFirebase = async (setListaObjetos) => {
    try {
        const q = query(collection(db, 'projetos'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                descricao: doc.data().descricao,
                linguagem: doc.data().linguagem,
                status: doc.data().status,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}
export const getProjetosUIDFirebase = async (uid, setListaObjetos) => {
    try {
        const colRef = collection(db, "projetos");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                descricao: doc.data().descricao,
                linguagem: doc.data().linguagem,
                status: doc.data().status,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deleteProjetoFirebase = async objeto => {
    try {
        const projetoDocRef = doc(db, 'projetos', objeto.id)
        await deleteDoc(projetoDocRef);
    } catch (err) {
        throw err;
    }
}

export const addProjetoFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'projetos'),
            {
                titulo: objeto.titulo,
                descricao: objeto.descricao,
                linguagem: objeto.linguagem,
                status: objeto.status,
                uid: objeto.uid,
                usuario: objeto.usuario,
                email: objeto.email
            }).then(function (docRef) {
                objeto = { ...objeto, id: docRef.id };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}
export const updateProjetoFirebase = async objeto => {
    try {
        const projetoDocRef = doc(db, 'projetos', objeto.id)
        await updateDoc(projetoDocRef, {
            titulo: objeto.titulo,
            descricao: objeto.descricao,
            linguagem: objeto.linguagem,
            status: objeto.status,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}