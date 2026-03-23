import { db } from './firebaseConnection';
import { useEffect, useState } from 'react';
import './app.css'

import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

function App() {
  const [ titulo, setTitulo ] = useState('');
  const [ autor, setAutor ] = useState('');
  const [idPost, setIdPost] =useState('');
  const [ lista, setLista ] = useState([]);

  // Atualizar em tempo real
  useEffect(() => {
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })

        setLista(listaPost);
      })
    }

    loadPosts();
  }, [])

  async function handleAdd(){
    await addDoc(collection(db, "posts"),{
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("Dados registrados no banco")
      setAutor('');
      setTitulo('');
    })
    .catch((error) => {
      console.log("Gerou o seguinte erro: " + error)
    })
  }
  
  async function handleSearch() {
    const postRef = collection(db, "posts");

    await getDocs(postRef)
    .then((snapshot) => {
      console.log('funcionou')
      
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setLista(lista);
      console.log(lista);
    })
    .catch((error) => {
      console.log("erro: " + error);
    }) 
  }

  async function handleUpdate(){
    const docRef = doc(db, "posts", idPost);

    await updateDoc(docRef,{
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      setTitulo('');
      setAutor('');
      setIdPost('');
    })
    .catch(() => {
      console.log("Erro ao atualizar")
    })
  }

  async function deletePost(id){
    const docRef = doc(db, "posts", id);

    await deleteDoc(docRef);
  }

  return (
  
    <div>
      <h1>REACT + FIREBASE </h1>

      <div className="container">
        <label>Id do Post:</label>
        <input 
          type="text" 
          placeholder='Autor do post'
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />

        <label>Titulo:</label>
        <textarea 
          type="text" 
          placeholder='Digite o Título'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label>Autor:</label>
        <input 
          type="text" 
          placeholder='Autor do post'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={handleSearch}>Buscar posts</button>
        <button onClick={handleUpdate} >Atualizar post</button>

        <ul>
          {lista.map((item) => (
            <li key={item.id}>
              <strong>Id do post:</strong> {item.id} <br />
              <strong>Título:</strong> {item.titulo} <br />
              <strong>Autor:</strong> {item.autor} <br />
              <button className={"delete"} onClick={ () => deletePost(item.id) }>Deletar</button><br /> <br />
            </li>
          ))}
        </ul>
      </div>
    </div>

)}

export default App
