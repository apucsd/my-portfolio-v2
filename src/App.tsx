import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import EducationList from './pages/education/EducationList';
import ProjectsList from './pages/projects/ProjectsList';
import ExperienceList from './pages/experience/ExperienceList';
import SkillsList from './pages/skills/SkillsList';
import CoursesList from './pages/courses/CoursesList';
import ContactFormsList from './pages/contact/ContactFormsList';
import ContactLinksList from './pages/contact/ContactLinksList';
import { ROUTES } from './utils/constants';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider


        theme={{
          token: {
            colorPrimary: '#1772e0',
            // colorTextLightSolid: '#000000',

            fontSize: 16,
          },
          components: {
            Button: {
              controlHeight: 42,

              paddingInline: 24,
            },
            Input: {
              controlHeight: 42,

              paddingInline: 24,
            },

            InputNumber: {
              controlHeight: 42,
            },
            Form: {
              marginLG: 16,
              fontFamily: 'Poppins, sans-serif',
            },

            Radio: {},
            Table: {
              headerBg: '#1772e0',
              headerColor: '#fff',
            },
            DatePicker: {
              controlHeight: 42,
            },
            Select: {
              controlHeight: 42,
            },
            Divider: {
              margin: -16,
              padding: -110,
            },
            Tooltip: {
              colorTextLightSolid: '#000000',
              colorBgContainer: '#fff',
            },
          },
        }}
      >


        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="education" element={<EducationList />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="experience" element={<ExperienceList />} />
              <Route path="skills" element={<SkillsList />} />
              <Route path="courses" element={<CoursesList />} />
              <Route path="contact-forms" element={<ContactFormsList />} />
              <Route path="contact-links" element={<ContactLinksList />} />
            </Route>

            <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />

            <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;