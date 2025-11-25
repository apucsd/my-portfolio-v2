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
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Education } from '../../types/admin.types';
import {
    useGetEducationsQuery,
    useCreateEducationMutation,
    useUpdateEducationMutation,
    useDeleteEducationMutation,
} from '../../store/apiSlice';

const { TextArea } = Input;

const EducationList: React.FC = () => {
    const { data = [], isLoading } = useGetEducationsQuery();
    const [createEducation] = useCreateEducationMutation();
    const [updateEducation] = useUpdateEducationMutation();
    const [deleteEducation] = useDeleteEducationMutation();

    const [modalVisible, setModalVisible] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Education | null>(null);
    const [form] = Form.useForm();

    const handleAdd = () => {
        setEditingItem(null);
        form.resetFields();
        setModalVisible(true);
    };

    const handleEdit = (record: Education) => {
        setEditingItem(record);
        form.setFieldsValue(record);
        setModalVisible(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteEducation(id).unwrap();
            message.success('Education deleted successfully');
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to delete education');
        }
    };

    const handleSubmit = async (values: any) => {
        try {
            if (editingItem) {
                await updateEducation({ id: editingItem.id, data: values }).unwrap();
                message.success('Education updated successfully');
            } else {
                await createEducation(values).unwrap();
                message.success('Education created successfully');
            }
            setModalVisible(false);
            form.resetFields();
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save education');
        }
    };

    const columns: ColumnsType<Education> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Institution',
            dataIndex: 'institution',
            key: 'institution',
        },
        {
            title: 'Passing Year',
            dataIndex: 'passingYear',
            key: 'passingYear',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this education?"
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
            title="Education"
            extra={
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                    Add Education
                </Button>
            }
        >
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                loading={isLoading}
                pagination={{ pageSize: 10 }}
            />

            <Modal
                title={editingItem ? 'Edit Education' : 'Add Education'}
                open={modalVisible}
                onCancel={() => {
                    setModalVisible(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
                width={600}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        name="name"
                        label="Degree Name"
                        rules={[{ required: true, message: 'Please enter degree name' }]}
                    >
                        <Input placeholder="e.g., Bachelor of Science in Computer Science" />
                    </Form.Item>

                    <Form.Item
                        name="institution"
                        label="Institution"
                        rules={[{ required: true, message: 'Please enter institution' }]}
                    >
                        <Input placeholder="e.g., University of Dhaka" />
                    </Form.Item>

                    <Form.Item
                        name="passingYear"
                        label="Passing Year"
                        rules={[{ required: true, message: 'Please enter passing year' }]}
                    >
                        <Input placeholder="e.g., 2018 - 2022" />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter description' }]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Describe your education, achievements, and key learnings..."
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default EducationList;
