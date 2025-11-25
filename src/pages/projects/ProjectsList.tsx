import React from 'react';
import {
    Table,
    Button,
    Space,
    Modal,
    Form,
    Input,
    message,
    Popconfirm,
    Card,
    Tag,
    Image,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Project } from '../../types/admin.types';
import {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} from '../../store/apiSlice';

const { TextArea } = Input;

const ProjectsList: React.FC = () => {
    const { data = [], isLoading } = useGetProjectsQuery();
    const [createProject] = useCreateProjectMutation();
    const [updateProject] = useUpdateProjectMutation();
    const [deleteProject] = useDeleteProjectMutation();

    const [modalVisible, setModalVisible] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Project | null>(null);
    const [form] = Form.useForm();

    const handleAdd = () => {
        setEditingItem(null);
        form.resetFields();
        setModalVisible(true);
    };

    const handleEdit = (record: Project) => {
        setEditingItem(record);
        form.setFieldsValue({
            ...record,
            techs: record.techs.join(', '),
        });
        setModalVisible(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteProject(id).unwrap();
            message.success('Project deleted successfully');
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to delete project');
        }
    };

    const handleSubmit = async (values: any) => {
        try {
            const data = {
                ...values,
                techs: values.techs.split(',').map((t: string) => t.trim()),
            };

            if (editingItem) {
                await updateProject({ id: editingItem.id, data }).unwrap();
                message.success('Project updated successfully');
            } else {
                await createProject(data).unwrap();
                message.success('Project created successfully');
            }
            setModalVisible(false);
            form.resetFields();
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save project');
        }
    };

    const columns: ColumnsType<Project> = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: 100,
            render: (image: string) => (
                <Image src={image} alt="Project" width={60} height={60} style={{ objectFit: 'cover', borderRadius: 4 }} />
            ),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Technologies',
            dataIndex: 'techs',
            key: 'techs',
            render: (techs: string[]) => (
                <>
                    {techs.slice(0, 3).map((tech) => (
                        <Tag key={tech} color="blue">
                            {tech}
                        </Tag>
                    ))}
                    {techs.length > 3 && <Tag>+{techs.length - 3}</Tag>}
                </>
            ),
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
            render: (link: string) => (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <LinkOutlined /> View
                </a>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <Card
            title="Projects"
            extra={
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                    Add Project
                </Button>
            }
        >
            <Table columns={columns} dataSource={data} rowKey="id" loading={isLoading} pagination={{ pageSize: 10 }} />

            <Modal
                title={editingItem ? 'Edit Project' : 'Add Project'}
                open={modalVisible}
                onCancel={() => {
                    setModalVisible(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
                width={700}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="title" label="Project Title" rules={[{ required: true, message: 'Please enter title' }]}>
                        <Input placeholder="e.g., E-Commerce Platform" />
                    </Form.Item>

                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter description' }]}>
                        <TextArea rows={4} placeholder="Describe your project..." />
                    </Form.Item>

                    <Form.Item name="image" label="Image URL" rules={[{ required: true, message: 'Please enter image URL' }]}>
                        <Input placeholder="https://example.com/image.jpg" />
                    </Form.Item>

                    <Form.Item name="link" label="Live Link" rules={[{ required: true, message: 'Please enter live link' }]}>
                        <Input placeholder="https://example.com" />
                    </Form.Item>

                    <Form.Item name="repoLink" label="Repository Link">
                        <Input placeholder="https://github.com/username/repo" />
                    </Form.Item>

                    <Form.Item name="techs" label="Technologies" rules={[{ required: true, message: 'Please enter technologies' }]}>
                        <Input placeholder="React, Node.js, MongoDB (comma separated)" />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default ProjectsList;
