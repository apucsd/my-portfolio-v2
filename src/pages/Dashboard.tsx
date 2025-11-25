import React from 'react';
import { Card, Row, Col, Statistic, Table } from 'antd';
import {
    ProjectOutlined,
    BookOutlined,
    TrophyOutlined,
    SafetyCertificateOutlined,
    MailOutlined,
    CodeOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ContactForm } from '../types/admin.types';
import {
    useGetEducationsQuery,
    useGetProjectsQuery,
    useGetExperiencesQuery,
    useGetCoursesQuery,
    useGetContactFormsQuery,
    useGetSkillsQuery,
} from '../store/apiSlice';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Dashboard: React.FC = () => {
    const { data: projects = [] } = useGetProjectsQuery();
    const { data: education = [] } = useGetEducationsQuery();
    const { data: experience = [] } = useGetExperiencesQuery();
    const { data: courses = [] } = useGetCoursesQuery();
    const { data: contactForms = [] } = useGetContactFormsQuery();
    const { data: skills = [] } = useGetSkillsQuery();

    const stats = {
        projects: projects.length,
        education: education.length,
        experience: experience.length,
        courses: courses.length,
        contactForms: contactForms.length,
        skills: skills.length,
    };

    const recentContacts = contactForms.slice(0, 5);

    const columns: ColumnsType<ContactForm> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date: string) => dayjs(date).fromNow(),
        },
    ];

    return (
        <div>
            <h1 style={{ marginBottom: 24 }}>Dashboard</h1>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Total Projects"
                            value={stats.projects}
                            prefix={<ProjectOutlined />}
                            valueStyle={{ color: '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Education"
                            value={stats.education}
                            prefix={<BookOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Experience"
                            value={stats.experience}
                            prefix={<TrophyOutlined />}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Courses"
                            value={stats.courses}
                            prefix={<SafetyCertificateOutlined />}
                            valueStyle={{ color: '#722ed1' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Contact Forms"
                            value={stats.contactForms}
                            prefix={<MailOutlined />}
                            valueStyle={{ color: '#fa8c16' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Total Skills"
                            value={stats.skills}
                            prefix={<CodeOutlined />}
                            valueStyle={{ color: '#13c2c2' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Card title="Recent Contact Forms" style={{ marginTop: 24 }}>
                <Table
                    columns={columns}
                    dataSource={recentContacts}
                    rowKey="id"
                    pagination={false}
                />
            </Card>
        </div>
    );
};

export default Dashboard;
