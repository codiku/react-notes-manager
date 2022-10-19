import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noteAPI = createApi({
  reducerPath: "noteAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3200/notes/",
  }),
  endpoints: (builder) => ({
    fetchAllNotes: builder.query({
      query: () => ``,
    }),
    fetchNoteById: builder.query({
      query: (id) => `${id}`,
    }),
    addNote: builder.mutation({
      query: ({ title, content }) => ({
        url: ``,
        method: "POST",
        body: { title, content, date : new Date().toLocaleDateString() },
      }),
    }),
    deleteNoteById: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch }) {
        dispatch(
          noteAPI.util.updateQueryData(
            "fetchAllNotes",
            undefined,
            (cachedNotes) => {
              return cachedNotes.filter(
                (cachedNote) => cachedNote.id.toString() !== id.toString()
              );
            }
          )
        );
      },
    }),
    updateNoteById: builder.mutation({
      query: ({ title, content, id }) => ({
        url: `${id}`,
        method: "PUT",
        body: { title, content },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data: updatedNote } = await queryFulfilled;
        dispatch(
          noteAPI.util.updateQueryData(
            "fetchNoteById",
            updatedNote.id,
            (cachedNotes) => {
              return updatedNote
            }
          )
        );
      },
    }),
  }),
});

export const {
  useFetchAllNotesQuery,
  useFetchNoteByIdQuery,
  useAddNoteMutation,
  useDeleteNoteByIdMutation,
  useUpdateNoteByIdMutation,
} = noteAPI;
