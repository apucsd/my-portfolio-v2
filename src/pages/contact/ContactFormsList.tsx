import React from 'react';
import {
    Table,
    Button,
    Space,
    Modal,
    message,
    Popconfirm,
    Card,
    Descriptions,
} from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ContactForm } from '../../types/admin.types';
import {
    useGetContactFormsQuery,
    useDeleteContactFormMutation,
} from '../../store/apiSlice';
import dayjs from 'dayjs';

const ContactFormsList: React.FC = () => {
    const { data = [], isLoading } = useGetContactFormsQuery();
    const [deleteContactForm] = useDeleteContactFormMutation();

    const [viewModalVisible, setViewModalVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<ContactForm | null>(null);

    const handleView = (record: ContactForm) => {
        setSelectedItem(record);
        setViewModalVisible(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteContactForm(id).unwrap();
            message.success('Contact form deleted successfully');
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to delete contact form');
        }
    };

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
            render: (date: string) => dayjs(date).format('MMM DD, YYYY HH:mm'),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button type="link" icon={<EyeOutlined />} onClick={() => handleView(record)}>
                        View
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this contact form?"
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
        <Card title="Contact Forms">
            <Table columns={columns} dataSource={data} rowKey="id" loading={isLoading} pagination={{ pageSize: 10 }} />

            <Modal
                title="Contact Form Details"
                open={viewModalVisible}
                onCancel={() => setViewModalVisible(false)}
                footer={[
                    <Button key="close" onClick={() => setViewModalVisible(false)}>
                        Close
                    </Button>,
                ]}
                width={600}
            >
                {selectedItem && (
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Name">{selectedItem.name}</Descriptions.Item>
                        <Descriptions.Item label="Email">{selectedItem.email}</Descriptions.Item>
                        <Descriptions.Item label="Subject">{selectedItem.subject}</Descriptions.Item>
                        <Descriptions.Item label="Message">{selectedItem.message}</Descriptions.Item>
                        <Descriptions.Item label="Received">
                            {dayjs(selectedItem.createdAt).format('MMMM DD, YYYY [at] HH:mm')}
                        </Descriptions.Item>
                    </Descriptions>
                )}
            </Modal>
        </Card>
    );
};

export default ContactFormsList;
