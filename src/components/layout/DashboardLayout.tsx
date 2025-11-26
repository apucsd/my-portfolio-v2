import React, { useState } from 'react';
import { Layout, Menu, theme, Button, Tooltip } from 'antd';
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
    LogoutOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './DashboardLayout.css';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/authSlice';

const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const menuItems: MenuProps['items'] = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <NavLink to="/admin">Dashboard</NavLink>,
        },
        {
            key: '/education',
            icon: <BookOutlined />,
            label: <NavLink to="/admin/education">Education</NavLink>,
        },
        {
            key: '/projects',
            icon: <ProjectOutlined />,
            label: <NavLink to="/admin/projects">Projects</NavLink>,
        },
        {
            key: '/experience',
            icon: <TrophyOutlined />,
            label: <NavLink to="/admin/experience">Experience</NavLink>,
        },
        {
            key: '/skills',
            icon: <CodeOutlined />,
            label: <NavLink to="/admin/skills">Skills</NavLink>,
        },
        {
            key: '/courses',
            icon: <SafetyCertificateOutlined />,
            label: <NavLink to="/admin/courses">Courses</NavLink>,
        },
        {
            key: 'contact',
            icon: <ContactsOutlined />,
            label: <NavLink to="/admin/contact">Contact</NavLink>,
            children: [
                {
                    key: '/contact-forms',
                    label: <NavLink to="/admin/contact-forms">Contact Forms</NavLink>,
                },
                {
                    key: '/contact-links',
                    label: <NavLink to="/admin/contact-links">Contact Links</NavLink>,
                },
            ],
        },
    ];

    // Get current selected key based on location
    const getSelectedKey = () => {
        const path = location.pathname;
        if (path === '/dashboard') return '/dashboard';
        if (path.startsWith('/education')) return '/education';
        if (path.startsWith('/projects')) return '/projects';
        if (path.startsWith('/experience')) return '/experience';
        if (path.startsWith('/skills')) return '/skills';
        if (path.startsWith('/courses')) return '/courses';
        if (path.startsWith('/contact-forms')) return '/contact-forms';
        if (path.startsWith('/contact-links')) return '/contact-links';
        return '/dashboard';
    };



    return (
        <Layout style={{ minHeight: '100vh', background: '#0a0f1e' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                onBreakpoint={(broken) => {
                    if (broken) setCollapsed(true);
                }}
                className="modern-sider"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, #0c1524 0%, #1a1f2e 100%)',
                    borderRight: '1px solid rgba(124, 207, 0, 0.1)',
                }}
            >
                {/* Logo Section */}
                <div
                    className="logo-section"
                    style={{
                        height: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        borderBottom: '1px solid rgba(124, 207, 0, 0.1)',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        {/* Logo Icon */}
                        <div
                            style={{
                                width: collapsed ? '40px' : '48px',
                                height: collapsed ? '40px' : '48px',
                                background: 'linear-gradient(135deg, #7CCF00 0%, #5a9900 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: collapsed ? '18px' : '24px',
                                fontWeight: 'bold',
                                color: '#0c1524',
                                boxShadow: '0 4px 12px rgba(124, 207, 0, 0.3)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            PA
                        </div>
                        {/* Logo Text */}
                        {!collapsed && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    opacity: collapsed ? 0 : 1,
                                    transition: 'opacity 0.3s',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#7CCF00',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    Portfolio
                                </span>
                                <span
                                    style={{
                                        color: '#8b92a7',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        letterSpacing: '1px',
                                    }}
                                >
                                    ADMIN
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Menu */}
                <Menu
                    className="modern-menu"
                    mode="inline"
                    selectedKeys={[getSelectedKey()]}
                    defaultOpenKeys={['contact']}
                    items={menuItems}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        padding: '16px 8px',
                    }}
                />

                {/* Footer Badge */}
                {!collapsed && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '16px',
                            right: '16px',
                            padding: '12px',
                            background: 'rgba(124, 207, 0, 0.1)',
                            border: '1px solid rgba(124, 207, 0, 0.2)',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: '#7CCF00',
                                fontWeight: '600',
                                letterSpacing: '0.5px',
                            }}
                        >
                            v2.0.0
                        </div>
                        <div
                            style={{
                                fontSize: '10px',
                                color: '#8b92a7',
                                marginTop: '4px',
                            }}
                        >
                            Dashboard System
                        </div>
                    </div>
                )}
            </Sider>

            <Layout
                style={{
                    marginLeft: collapsed ? 80 : 200,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: '#0a0f1e',
                }}
            >
                {/* Header */}
                <Header
                    className="modern-header"
                    style={{
                        padding: '0 32px',
                        background: 'rgba(12, 21, 36, 0.8)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        borderBottom: '1px solid rgba(124, 207, 0, 0.1)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                        height: '72px',
                    }}
                >
                    {/* Left Section - Toggle Button */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                width: '44px',
                                height: '44px',
                                border: '1px solid rgba(124, 207, 0, 0.2)',
                                background: 'rgba(124, 207, 0, 0.05)',
                                borderRadius: '10px',
                                color: '#7CCF00',
                                fontSize: '18px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(124, 207, 0, 0.15)';
                                e.currentTarget.style.borderColor = '#7CCF00';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(124, 207, 0, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(124, 207, 0, 0.2)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </button>

                        {/* Breadcrumb or Page Title */}
                        <div
                            style={{
                                color: '#e2e8f0',
                                fontSize: '16px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span style={{ color: '#7CCF00' }}>●</span>
                            <span>
                                {(() => {
                                    const lastSegment = location.pathname.split('/').pop();
                                    return lastSegment
                                        ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
                                        : 'Dashboard';
                                })()}
                            </span>
                        </div>
                    </div>

                    {/* logout icon  hover tooltip*/}
                    <Tooltip color="white" title="Logout">
                        <Button
                            onClick={handleLogout}
                            type="text"
                            icon={<LogoutOutlined />}
                            style={{
                                color: '#e2e8f0',
                                fontSize: '16px',
                                fontWeight: '600',
                                border: 'none',
                                background: 'transparent',
                                padding: '0',
                                margin: '0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        />
                    </Tooltip>
                </Header>

                {/* Content */}
                <Content
                    style={{
                        margin: '24px',
                        padding: '32px',
                        minHeight: 'calc(100vh - 120px)',
                        background: 'rgba(12, 21, 36, 0.6)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: borderRadiusLG,
                        border: '1px solid rgba(124, 207, 0, 0.1)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
