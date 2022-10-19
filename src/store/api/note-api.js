import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noteAPI = createApi({
  reducerPath: "noteAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6304ae6894b8c58fd722c01e.mockapi.io/notes/",
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
        body: { title, content },
      }),
    }),
    deleteNoteById: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data: deletedNote } = await queryFulfilled;
        dispatch(
          noteAPI.util.updateQueryData(
            "fetchAllNotes",
            undefined,
            (cachedNotes) => {
              return cachedNotes.filter(
                (cachedNote) => cachedNote.id !== deletedNote.id
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
