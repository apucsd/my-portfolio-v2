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
    InputNumber,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Course } from '../../types/admin.types';
import {
    useGetCoursesQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation,
} from '../../store/apiSlice';

const { TextArea } = Input;

const CoursesList: React.FC = () => {
    const { data = [], isLoading } = useGetCoursesQuery();
    const [createCourse] = useCreateCourseMutation();
    const [updateCourse] = useUpdateCourseMutation();
    const [deleteCourse] = useDeleteCourseMutation();

    const [modalVisible, setModalVisible] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Course | null>(null);
    const [form] = Form.useForm();

    const handleAdd = () => {
        setEditingItem(null);
        form.resetFields();
        setModalVisible(true);
    };

    const handleEdit = (record: Course) => {
        setEditingItem(record);
        form.setFieldsValue(record);
        setModalVisible(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCourse(id).unwrap();
            message.success('Course deleted successfully');
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to delete course');
        }
    };

    const handleSubmit = async (values: any) => {
        try {
            if (editingItem) {
                await updateCourse({ id: editingItem.id, data: values }).unwrap();
                message.success('Course updated successfully');
            } else {
                await createCourse(values).unwrap();
                message.success('Course created successfully');
            }
            setModalVisible(false);
            form.resetFields();
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save course');
        }
    };

    const columns: ColumnsType<Course> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Institution',
            dataIndex: 'institution',
            key: 'institution',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Certificate',
            dataIndex: 'certificate',
            key: 'certificate',
            render: (certificate: string) => (
                <a href={certificate} target="_blank" rel="noopener noreferrer">
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
                        title="Are you sure to delete this course?"
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
            title="Courses & Certifications"
            extra={
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                    Add Course
                </Button>
            }
        >
            <Table columns={columns} dataSource={data} rowKey="id" loading={isLoading} pagination={{ pageSize: 10 }} />

            <Modal
                title={editingItem ? 'Edit Course' : 'Add Course'}
                open={modalVisible}
                onCancel={() => {
                    setModalVisible(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
                width={700}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="title" label="Course Title" rules={[{ required: true, message: 'Please enter title' }]}>
                        <Input placeholder="e.g., Complete Web Development" />
                    </Form.Item>

                    <Form.Item name="institution" label="Institution" rules={[{ required: true, message: 'Please enter institution' }]}>
                        <Input placeholder="e.g., Programming Hero" />
                    </Form.Item>

                    <Form.Item name="year" label="Year" rules={[{ required: true, message: 'Please enter year' }]}>
                        <InputNumber placeholder="2023" style={{ width: '100%' }} min={1900} max={2100} />
                    </Form.Item>

                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter description' }]}>
                        <TextArea rows={4} placeholder="Describe what you learned..." />
                    </Form.Item>

                    <Form.Item name="certificate" label="Certificate URL" rules={[{ required: true, message: 'Please enter certificate URL' }]}>
                        <Input placeholder="https://example.com/certificate" />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default CoursesList;
