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
    DatePicker,
    Tag,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, MinusCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Experience } from '../../types/admin.types';
import {
    useGetExperiencesQuery,
    useCreateExperienceMutation,
    useUpdateExperienceMutation,
    useDeleteExperienceMutation,
} from '../../store/apiSlice';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const ExperienceList: React.FC = () => {
    const { data = [], isLoading } = useGetExperiencesQuery();
    const [createExperience] = useCreateExperienceMutation();
    const [updateExperience] = useUpdateExperienceMutation();
    const [deleteExperience] = useDeleteExperienceMutation();

    const [modalVisible, setModalVisible] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Experience | null>(null);
    const [form] = Form.useForm();

    const handleAdd = () => {
        setEditingItem(null);
        form.resetFields();
        setModalVisible(true);
    };

    const handleEdit = (record: Experience) => {
        setEditingItem(record);
        form.setFieldsValue({
            ...record,
            dateRange: record.endDate
                ? [dayjs(record.startDate), dayjs(record.endDate)]
                : [dayjs(record.startDate), null],
            techs: record.techs.join(', '),
        });
        setModalVisible(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteExperience(id).unwrap();
            message.success('Experience deleted successfully');
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to delete experience');
        }
    };

    const handleSubmit = async (values: any) => {
        try {
            const data = {
                companyName: values.companyName,
                location: values.location,
                position: values.position,
                startDate: values.dateRange[0].toISOString(),
                endDate: values.dateRange[1] ? values.dateRange[1].toISOString() : undefined,
                works: values.works,
                techs: values.techs.split(',').map((t: string) => t.trim()),
            };

            if (editingItem) {
                await updateExperience({ id: editingItem.id, data }).unwrap();
                message.success('Experience updated successfully');
            } else {
                await createExperience(data).unwrap();
                message.success('Experience created successfully');
            }
            setModalVisible(false);
            form.resetFields();
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save experience');
        }
    };

    const columns: ColumnsType<Experience> = [
        {
            title: 'Company',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Duration',
            key: 'duration',
            render: (_, record) => (
                <span>
                    {dayjs(record.startDate).format('MMM YYYY')} -{' '}
                    {record.endDate ? dayjs(record.endDate).format('MMM YYYY') : 'Present'}
                </span>
            ),
        },
        {
            title: 'Technologies',
            dataIndex: 'techs',
            key: 'techs',
            render: (techs: string[]) => (
                <>
                    {techs.slice(0, 2).map((tech) => (
                        <Tag key={tech} color="blue">
                            {tech}
                        </Tag>
                    ))}
                    {techs.length > 2 && <Tag>+{techs.length - 2}</Tag>}
                </>
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
                        title="Are you sure to delete this experience?"
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
            title="Experience"
            extra={
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                    Add Experience
                </Button>
            }
        >
            <Table columns={columns} dataSource={data} rowKey="id" loading={isLoading} pagination={{ pageSize: 10 }} />

            <Modal
                title={editingItem ? 'Edit Experience' : 'Add Experience'}
                open={modalVisible}
                onCancel={() => {
                    setModalVisible(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
                width={700}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="companyName" label="Company Name" rules={[{ required: true, message: 'Please enter company name' }]}>
                        <Input placeholder="e.g., SparkTech" />
                    </Form.Item>

                    <Form.Item name="position" label="Position" rules={[{ required: true, message: 'Please enter position' }]}>
                        <Input placeholder="e.g., Full Stack Developer" />
                    </Form.Item>

                    <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Please enter location' }]}>
                        <Input placeholder="e.g., Dhaka, Bangladesh" />
                    </Form.Item>

                    <Form.Item name="dateRange" label="Duration" rules={[{ required: true, message: 'Please select duration' }]}>
                        <RangePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item label="Work Responsibilities">
                        <Form.List name="works" initialValue={['']}>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map((field) => (
                                        <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...field}
                                                rules={[{ required: true, message: 'Please enter work description' }]}
                                                style={{ marginBottom: 0, flex: 1 }}
                                            >
                                                <TextArea rows={2} placeholder="Describe your work..." />
                                            </Form.Item>
                                            {fields.length > 1 && (
                                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                                            )}
                                        </Space>
                                    ))}
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add Work Item
                                    </Button>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item name="techs" label="Technologies" rules={[{ required: true, message: 'Please enter technologies' }]}>
                        <Input placeholder="React, Node.js, MongoDB (comma separated)" />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default ExperienceList;
