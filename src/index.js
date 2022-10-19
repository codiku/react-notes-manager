import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from './App';
import { Note } from './pages/note';
import { NoteCreate } from "./pages/note-create";
import { NotesBrowse } from "./pages/notes-browse";
import { PageNotFound } from "./pages/page-not-found";
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<NotesBrowse />} />
          <Route path="note/:noteId" element={<Note />} />
          <Route path="note/create" element={<NoteCreate />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

