import React from 'react';
import {
    Card,
    Form,
    Input,
    Button,
    message,
    Tag,
    Space,
    Divider,
    Spin,
} from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import {
    useGetSkillsQuery,
    useCreateSkillMutation,
    useUpdateSkillMutation,
} from '../../store/apiSlice';

const SkillsList: React.FC = () => {
    const { data: skills = [], isLoading } = useGetSkillsQuery();
    const [createSkill] = useCreateSkillMutation();
    const [updateSkill] = useUpdateSkillMutation();

    const [form] = Form.useForm();
    const [editMode, setEditMode] = React.useState(false);

    const skillData = skills[0];

    React.useEffect(() => {
        if (skillData) {
            form.setFieldsValue({
                backend: skillData.backend?.join(', ') || '',
                frontend: skillData.frontend?.join(', ') || '',
                devOps: skillData.devOps?.join(', ') || '',
                database: skillData.database?.join(', ') || '',
                tools: skillData.tools?.join(', ') || '',
                other: skillData.other?.join(', ') || '',
            });
        }
    }, [skillData, form]);

    const handleSubmit = async (values: any) => {
        try {
            const data = {
                backend: values.backend.split(',').map((s: string) => s.trim()).filter(Boolean),
                frontend: values.frontend.split(',').map((s: string) => s.trim()).filter(Boolean),
                devOps: values.devOps.split(',').map((s: string) => s.trim()).filter(Boolean),
                database: values.database.split(',').map((s: string) => s.trim()).filter(Boolean),
                tools: values.tools.split(',').map((s: string) => s.trim()).filter(Boolean),
                other: values.other.split(',').map((s: string) => s.trim()).filter(Boolean),
            };

            if (skillData) {
                await updateSkill({ id: skillData.id, data }).unwrap();
                message.success('Skills updated successfully');
            } else {
                await createSkill(data).unwrap();
                message.success('Skills created successfully');
            }
            setEditMode(false);
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save skills');
        }
    };

    if (isLoading) {
        return (
            <Card title="Skills">
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    <Spin size="large" />
                </div>
            </Card>
        );
    }

    const renderSkillCategory = (title: string, skills: string[] = []) => (
        <div style={{ marginBottom: 24 }}>
            <h3 style={{ marginBottom: 12, color: '#1890ff' }}>{title}</h3>
            <Space wrap>
                {skills.map((skill) => (
                    <Tag key={skill} color="blue" style={{ fontSize: 14, padding: '4px 12px' }}>
                        {skill}
                    </Tag>
                ))}
            </Space>
        </div>
    );

    return (
        <Card
            title="Skills"
            extra={
                !editMode ? (
                    <Button type="primary" onClick={() => setEditMode(true)}>
                        {skillData ? 'Edit Skills' : 'Add Skills'}
                    </Button>
                ) : (
                    <Button onClick={() => setEditMode(false)}>Cancel</Button>
                )
            }
        >
            {!editMode ? (
                skillData ? (
                    <>
                        {renderSkillCategory('Backend', skillData.backend)}
                        <Divider />
                        {renderSkillCategory('Frontend', skillData.frontend)}
                        <Divider />
                        {renderSkillCategory('DevOps', skillData.devOps)}
                        <Divider />
                        {renderSkillCategory('Database', skillData.database)}
                        <Divider />
                        {renderSkillCategory('Tools', skillData.tools)}
                        <Divider />
                        {renderSkillCategory('Other', skillData.other)}
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '50px 0' }}>
                        <p>No skills added yet. Click "Add Skills" to get started.</p>
                    </div>
                )
            ) : (
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        name="backend"
                        label="Backend Technologies"
                        rules={[{ required: true, message: 'Please enter backend skills' }]}
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="Node.js, Express, RESTful APIs (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item
                        name="frontend"
                        label="Frontend Technologies"
                        rules={[{ required: true, message: 'Please enter frontend skills' }]}
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="React, TypeScript, Next.js (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item
                        name="devOps"
                        label="DevOps & Tools"
                        rules={[{ required: true, message: 'Please enter DevOps skills' }]}
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="Docker, Git, CI/CD (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item
                        name="database"
                        label="Databases"
                        rules={[{ required: true, message: 'Please enter database skills' }]}
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="MongoDB, PostgreSQL, Redis (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item
                        name="tools"
                        label="Development Tools"
                        rules={[{ required: true, message: 'Please enter tools' }]}
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="VS Code, Postman, Jira (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item
                        name="other"
                        label="Other Skills"
                    >
                        <Input.TextArea
                            rows={2}
                            placeholder="Problem Solving, Team Collaboration (comma separated)"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save Skills
                            </Button>
                            <Button onClick={() => setEditMode(false)}>Cancel</Button>
                        </Space>
                    </Form.Item>
                </Form>
            )}
        </Card>
    );
};

export default SkillsList;
