import React from 'react';
import {
    Card,
    Form,
    Input,
    Button,
    message,
    Descriptions,
    Space,
    Spin,
} from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
    FileTextOutlined,
} from '@ant-design/icons';
import {
    useGetContactLinksQuery,
    useCreateContactLinksMutation,
    useUpdateContactLinksMutation,
} from '../../store/apiSlice';

const ContactLinksList: React.FC = () => {
    const { data: contactLinks = [], isLoading } = useGetContactLinksQuery();
    const [createContactLinks] = useCreateContactLinksMutation();
    const [updateContactLinks] = useUpdateContactLinksMutation();

    const [form] = Form.useForm();
    const [editMode, setEditMode] = React.useState(false);

    const contactData = contactLinks[0];

    React.useEffect(() => {
        if (contactData) {
            form.setFieldsValue(contactData);
        }
    }, [contactData, form]);

    const handleSubmit = async (values: any) => {
        try {
            if (contactData) {
                await updateContactLinks({ id: contactData.id, data: values }).unwrap();
                message.success('Contact links updated successfully');
            } else {
                await createContactLinks(values).unwrap();
                message.success('Contact links created successfully');
            }
            setEditMode(false);
        } catch (error: any) {
            message.error(error?.data?.message || 'Failed to save contact links');
        }
    };

    if (isLoading) {
        return (
            <Card title="Contact Links">
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    <Spin size="large" />
                </div>
            </Card>
        );
    }

    return (
        <Card
            title="Contact Links"
            extra={
                !editMode ? (
                    <Button type="primary" onClick={() => setEditMode(true)}>
                        {contactData ? 'Edit Links' : 'Add Links'}
                    </Button>
                ) : (
                    <Button onClick={() => setEditMode(false)}>Cancel</Button>
                )
            }
        >
            {!editMode ? (
                contactData ? (
                    <Descriptions column={1} bordered>
                        {contactData.github && (
                            <Descriptions.Item label={<><GithubOutlined /> GitHub</>}>
                                <a href={contactData.github} target="_blank" rel="noopener noreferrer">
                                    {contactData.github}
                                </a>
                            </Descriptions.Item>
                        )}
                        {contactData.linkedin && (
                            <Descriptions.Item label={<><LinkedinOutlined /> LinkedIn</>}>
                                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
                                    {contactData.linkedin}
                                </a>
                            </Descriptions.Item>
                        )}
                        {contactData.facebook && (
                            <Descriptions.Item label={<><FacebookOutlined /> Facebook</>}>
                                <a href={contactData.facebook} target="_blank" rel="noopener noreferrer">
                                    {contactData.facebook}
                                </a>
                            </Descriptions.Item>
                        )}
                        {contactData.phone && (
                            <Descriptions.Item label={<><PhoneOutlined /> Phone</>}>
                                {contactData.phone}
                            </Descriptions.Item>
                        )}
                        {contactData.email && (
                            <Descriptions.Item label={<><MailOutlined /> Email</>}>
                                {contactData.email}
                            </Descriptions.Item>
                        )}
                        {contactData.address && (
                            <Descriptions.Item label={<><EnvironmentOutlined /> Address</>}>
                                {contactData.address}
                            </Descriptions.Item>
                        )}
                        {contactData.resume && (
                            <Descriptions.Item label={<><FileTextOutlined /> Resume</>}>
                                <a href={contactData.resume} target="_blank" rel="noopener noreferrer">
                                    View Resume
                                </a>
                            </Descriptions.Item>
                        )}
                    </Descriptions>
                ) : (
                    <div style={{ textAlign: 'center', padding: '50px 0' }}>
                        <p>No contact links added yet. Click "Add Links" to get started.</p>
                    </div>
                )
            ) : (
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="github" label="GitHub URL">
                        <Input prefix={<GithubOutlined />} placeholder="https://github.com/username" />
                    </Form.Item>

                    <Form.Item name="linkedin" label="LinkedIn URL">
                        <Input prefix={<LinkedinOutlined />} placeholder="https://linkedin.com/in/username" />
                    </Form.Item>

                    <Form.Item name="facebook" label="Facebook URL">
                        <Input prefix={<FacebookOutlined />} placeholder="https://facebook.com/username" />
                    </Form.Item>

                    <Form.Item name="phone" label="Phone Number">
                        <Input prefix={<PhoneOutlined />} placeholder="+880 1234567890" />
                    </Form.Item>

                    <Form.Item name="email" label="Email Address" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
                        <Input prefix={<MailOutlined />} placeholder="email@example.com" />
                    </Form.Item>

                    <Form.Item name="address" label="Address">
                        <Input.TextArea prefix={<EnvironmentOutlined />} rows={2} placeholder="City, Country" />
                    </Form.Item>

                    <Form.Item name="resume" label="Resume URL">
                        <Input prefix={<FileTextOutlined />} placeholder="https://example.com/resume.pdf" />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save Links
                            </Button>
                            <Button onClick={() => setEditMode(false)}>Cancel</Button>
                        </Space>
                    </Form.Item>
                </Form>
            )}
        </Card>
    );
};

export default ContactLinksList;
