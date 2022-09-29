import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts", "Tags"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => `posts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Posts",
                id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getThemePosts: build.query({
      query: ({theme}) => `theme-posts/${theme}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Posts",
                id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPost: build.query({
      query: (id: string | undefined) => {
        return `posts/${id}`;
      },
      providesTags: [{ type: "Posts", id: "LIST" }],
    }),
    addImage: build.mutation({
      query: (body: any) => ({
        url: "upload",
        method: "POST",
        body: body,
      }),
    }),
    deleteImage: build.mutation({
      query: ({ name }) => ({
        url: `upload/${name}`,
        method: "DELETE",
      }),
    }),
    addPost: build.mutation({
      query: (body: any) => ({
        url: "posts",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    editPost: build.mutation({
      query: ({ fields, id }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body: fields,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    deletePost: build.mutation({
      query: (id: string) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetThemePostsQuery,
  useGetPostQuery,
  useAddImageMutation,
  useDeleteImageMutation,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postsApi;
