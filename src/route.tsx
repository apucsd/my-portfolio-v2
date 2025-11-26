
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import EducationList from "./pages/education/EducationList";
import ProjectsList from "./pages/projects/ProjectsList";
import ExperienceList from "./pages/experience/ExperienceList";
import SkillsList from "./pages/skills/SkillsList";
import CoursesList from "./pages/courses/CoursesList";
import ContactFormsList from "./pages/contact/ContactFormsList";
import ContactLinksList from "./pages/contact/ContactLinksList";
import ProtectedRoute from "./provider/ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: "/admin",
        element: <ProtectedRoute> <DashboardLayout /> </ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "education",
                element: <EducationList />,
            },
            {
                path: "projects",
                element: <ProjectsList />,
            },
            {
                path: "experience",
                element: <ExperienceList />,
            },
            {
                path: "skills",
                element: <SkillsList />,
            },
            {
                path: "courses",
                element: <CoursesList />,
            },
            {
                path: "contact-forms",
                element: <ContactFormsList />,
            },
            {
                path: "contact-links",
                element: <ContactLinksList />,
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]);

export default router;