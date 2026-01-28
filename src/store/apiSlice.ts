import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Education,
  Project,
  Experience,
  Skill,
  Course,
  ContactForm,
  ContactLinks,
  User,
} from "../types/admin.types";
import { RootState } from "./store";

const BASE_URL = "https://my-portfolio-v2-backend-two.vercel.app/api/v1";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Education",
    "Projects",
    "Experience",
    "Skills",
    "Courses",
    "ContactForms",
    "ContactLinks",
    "User",
  ],
  endpoints: (builder) => ({
    // Auth endpoints
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Education endpoints
    getEducations: builder.query<Education[], void>({
      query: () => "/education",
      providesTags: ["Education"],
      transformResponse: (response: any) => response.data || response,
    }),
    getEducationById: builder.query<Education, string>({
      query: (id) => `/education/${id}`,
      providesTags: ["Education"],
      transformResponse: (response: any) => response.data || response,
    }),
    createEducation: builder.mutation<Education, Partial<Education>>({
      query: (data) => ({
        url: "/education",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Education"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateEducation: builder.mutation<
      Education,
      { id: string; data: Partial<Education> }
    >({
      query: ({ id, data }) => ({
        url: `/education/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Education"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteEducation: builder.mutation<void, string>({
      query: (id) => ({
        url: `/education/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Education"],
    }),

    // Projects endpoints
    getProjects: builder.query<Project[], void>({
      query: () => "/projects",
      providesTags: ["Projects"],
      transformResponse: (response: any) => response.data || response,
    }),
    getProjectById: builder.query<Project, string>({
      query: (id) => `/projects/${id}`,
      providesTags: ["Projects"],
      transformResponse: (response: any) => response.data || response,
    }),
    createProject: builder.mutation<Project, Partial<Project>>({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Projects"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateProject: builder.mutation<
      Project,
      { id: string; data: Partial<Project> }
    >({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Projects"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),

    // Experience endpoints
    getExperiences: builder.query<Experience[], void>({
      query: () => "/experience",
      providesTags: ["Experience"],
      transformResponse: (response: any) => response.data || response,
    }),
    getExperienceById: builder.query<Experience, string>({
      query: (id) => `/experience/${id}`,
      providesTags: ["Experience"],
      transformResponse: (response: any) => response.data || response,
    }),
    createExperience: builder.mutation<Experience, Partial<Experience>>({
      query: (data) => ({
        url: "/experience",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Experience"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateExperience: builder.mutation<
      Experience,
      { id: string; data: Partial<Experience> }
    >({
      query: ({ id, data }) => ({
        url: `/experience/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Experience"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteExperience: builder.mutation<void, string>({
      query: (id) => ({
        url: `/experience/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience"],
    }),

    // Skills endpoints
    getSkills: builder.query<Skill[], void>({
      query: () => "/skills",
      providesTags: ["Skills"],
      transformResponse: (response: any) => response.data || response,
    }),
    getSkillById: builder.query<Skill, string>({
      query: (id) => `/skills/${id}`,
      providesTags: ["Skills"],
      transformResponse: (response: any) => response.data || response,
    }),
    createSkill: builder.mutation<Skill, Partial<Skill>>({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Skills"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateSkill: builder.mutation<Skill, { id: string; data: Partial<Skill> }>({
      query: ({ id, data }) => ({
        url: `/skills/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Skills"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteSkill: builder.mutation<void, string>({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skills"],
    }),

    // Courses endpoints
    getCourses: builder.query<Course[], void>({
      query: () => "/courses",
      providesTags: ["Courses"],
      transformResponse: (response: any) => response.data || response,
    }),
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: ["Courses"],
      transformResponse: (response: any) => response.data || response,
    }),
    createCourse: builder.mutation<Course, Partial<Course>>({
      query: (data) => ({
        url: "/courses",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Courses"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateCourse: builder.mutation<
      Course,
      { id: string; data: Partial<Course> }
    >({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Courses"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteCourse: builder.mutation<void, string>({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    // Contact Forms endpoints
    getContactForms: builder.query<ContactForm[], void>({
      query: () => "/contact/form",
      providesTags: ["ContactForms"],
      transformResponse: (response: any) => response.data || response,
    }),
    getContactFormById: builder.query<ContactForm, string>({
      query: (id) => `/contact/form/${id}`,
      providesTags: ["ContactForms"],
      transformResponse: (response: any) => response.data || response,
    }),
    deleteContactForm: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contact/form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ContactForms"],
    }),

    // Contact Links endpoints
    getContactLinks: builder.query<ContactLinks[], void>({
      query: () => "/contact/links",
      providesTags: ["ContactLinks"],
      transformResponse: (response: any) => response.data || response,
    }),
    getContactLinksById: builder.query<ContactLinks, string>({
      query: (id) => `/contact/links/${id}`,
      providesTags: ["ContactLinks"],
      transformResponse: (response: any) => response.data || response,
    }),
    createContactLinks: builder.mutation<ContactLinks, Partial<ContactLinks>>({
      query: (data) => ({
        url: "/contact/links",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ContactLinks"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateContactLinks: builder.mutation<
      ContactLinks,
      { id: string; data: Partial<ContactLinks> }
    >({
      query: ({ id, data }) => ({
        url: `/contact/links/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ContactLinks"],
      transformResponse: (response: any) => response.data || response,
    }),

    // User endpoints
    getMyProfile: builder.query<User, void>({
      query: () => "/users/me",
      providesTags: ["User"],
      transformResponse: (response: any) => response.data || response,
    }),
    updateMyProfile: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: "/users/update-profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: any) => response.data || response,
    }),
  }),
});

export const {
  // Auth
  useLoginMutation,

  // Education
  useGetEducationsQuery,
  useGetEducationByIdQuery,
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation,

  // Projects
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,

  // Experience
  useGetExperiencesQuery,
  useGetExperienceByIdQuery,
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,

  // Skills
  useGetSkillsQuery,
  useGetSkillByIdQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,

  // Courses
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,

  // Contact Forms
  useGetContactFormsQuery,
  useGetContactFormByIdQuery,
  useDeleteContactFormMutation,

  // Contact Links
  useGetContactLinksQuery,
  useGetContactLinksByIdQuery,
  useCreateContactLinksMutation,
  useUpdateContactLinksMutation,

  // User
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} = apiSlice;
