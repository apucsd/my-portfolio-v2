import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    BookOutlined,
    ProjectOutlined,
    TrophyOutlined,
    CodeOutlined,
    SafetyCertificateOutlined,
    ContactsOutlined,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
    };

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Profile',
            onClick: () => navigate(ROUTES.PROFILE),
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Logout',
            onClick: handleLogout,
        },
    ];

    const menuItems: MenuProps['items'] = [
        {
            key: ROUTES.DASHBOARD,
            icon: <DashboardOutlined />,
            label: 'Dashboard',
            onClick: () => navigate(ROUTES.DASHBOARD),
        },
        {
            key: ROUTES.EDUCATION,
            icon: <BookOutlined />,
            label: 'Education',
            onClick: () => navigate(ROUTES.EDUCATION),
        },
        {
            key: ROUTES.PROJECTS,
            icon: <ProjectOutlined />,
            label: 'Projects',
            onClick: () => navigate(ROUTES.PROJECTS),
        },
        {
            key: ROUTES.EXPERIENCE,
            icon: <TrophyOutlined />,
            label: 'Experience',
            onClick: () => navigate(ROUTES.EXPERIENCE),
        },
        {
            key: ROUTES.SKILLS,
            icon: <CodeOutlined />,
            label: 'Skills',
            onClick: () => navigate(ROUTES.SKILLS),
        },
        {
            key: ROUTES.COURSES,
            icon: <SafetyCertificateOutlined />,
            label: 'Courses',
            onClick: () => navigate(ROUTES.COURSES),
        },
        {
            key: 'contact',
            icon: <ContactsOutlined />,
            label: 'Contact',
            children: [
                {
                    key: ROUTES.CONTACT_FORMS,
                    label: 'Contact Forms',
                    onClick: () => navigate(ROUTES.CONTACT_FORMS),
                },
                {
                    key: ROUTES.CONTACT_LINKS,
                    label: 'Contact Links',
                    onClick: () => navigate(ROUTES.CONTACT_LINKS),
                },
            ],
        },
    ];

    // Get current selected key based on location
    const getSelectedKey = () => {
        const path = location.pathname;
        if (path === ROUTES.DASHBOARD) return ROUTES.DASHBOARD;
        if (path.startsWith(ROUTES.EDUCATION)) return ROUTES.EDUCATION;
        if (path.startsWith(ROUTES.PROJECTS)) return ROUTES.PROJECTS;
        if (path.startsWith(ROUTES.EXPERIENCE)) return ROUTES.EXPERIENCE;
        if (path.startsWith(ROUTES.SKILLS)) return ROUTES.SKILLS;
        if (path.startsWith(ROUTES.COURSES)) return ROUTES.COURSES;
        if (path.startsWith(ROUTES.CONTACT_FORMS)) return ROUTES.CONTACT_FORMS;
        if (path.startsWith(ROUTES.CONTACT_LINKS)) return ROUTES.CONTACT_LINKS;
        return ROUTES.DASHBOARD;
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                onBreakpoint={(broken) => {
                    if (broken) setCollapsed(true);
                }}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div
                    style={{
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: collapsed ? '16px' : '20px',
                        fontWeight: 'bold',
                        transition: 'all 0.2s',
                    }}
                >
                    {collapsed ? 'PA' : 'Portfolio Admin'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[getSelectedKey()]}
                    defaultOpenKeys={['contact']}
                    items={menuItems}
                />
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
                <Header
                    style={{
                        padding: '0 24px',
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            {/* <Avatar
                                src={user?.profileImage}
                                icon={<UserOutlined />}
                                style={{ marginRight: 12 }}
                            /> */}
                            {/* <span style={{ fontWeight: 500 }}>{user?.name}</span> */}
                        </div>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
