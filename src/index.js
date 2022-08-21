import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteCreate } from "./pages/note-create";
import { NoteRead } from "./pages/notes-read";
import { NoteUpdate } from "./pages/note-update";
import { NotesBrowse } from "./pages/notes-browse";
import { PageNotFound } from "./pages/page-not-found";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<NotesBrowse />} />
        <Route path=":noteId" element={<NoteRead />} />
        <Route path="create" element={<NoteCreate />} />
        <Route path="update" element={<NoteUpdate />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

