import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";
import CreateArea from "./CreateArea";
function App(){
  //create a notes array that keeps contains all notes. The array should be a hook because we want to dynamically render the notes on screen.
  const [notes,setNotes] =useState([]);
  //add a new note to the array with the use of the spread operator and previous array from the set function.
  function addNote(note){
    setNotes((prevValue)=>
       [...prevValue,note] //This means new array = previousArray.push(note)
    );
    console.log(notes);
  }
  function deleteNote(index){
    setNotes((prevValue)=>
    prevValue.filter((item,i)=> i!==index) //return a new array whith all items except for the one that had the given index.
  );
  }
  return <div>
  <Header />
  <CreateArea addNote={addNote}/>
  {notes.map((note,index)=>
    <Note
    key={index}
    id={index}
    title={note.title}
    content={note.content}
    Delete={deleteNote}
    />
  )}
   <Footer />
   </div>
  ;
};
export default App;
