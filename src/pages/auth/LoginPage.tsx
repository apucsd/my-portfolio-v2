import React from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { useLoginMutation } from '../../store/apiSlice';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/authSlice';
import { jwtDecode } from 'jwt-decode';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const onFinish = async (values: { email: string; password: string; remember: boolean }) => {
        try {
            const res = await login({ email: values.email, password: values.password }).unwrap();

            if (res.success) {
                const decodedUser = jwtDecode(res?.data?.accessToken);
                dispatch(setUser({
                    user: decodedUser,
                    token: res?.data?.accessToken,
                }));
                message.success('Welcome back! Login successful');
                navigate(ROUTES.DASHBOARD);
            }
        } catch (error: any) {
            message.error(error?.data?.message || 'Login failed. Please check your credentials');
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'radial-gradient(circle, #1C254B, #030C1C)',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Elements - Grid Pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Gradient Orbs */}
            <div
                style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'rgba(124, 207, 0, 0.1)',
                    top: '-200px',
                    right: '-200px',
                    filter: 'blur(80px)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(255, 107, 0, 0.08)',
                    bottom: '-150px',
                    left: '-150px',
                    filter: 'blur(80px)',
                }}
            />

            {/* Login Card with Glassmorphism */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '480px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '48px 40px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            margin: '0 auto 24px',
                            background: 'linear-gradient(135deg, #7CCF00 0%, #5a9900 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(124, 207, 0, 0.3)',
                        }}
                    >
                        <LoginOutlined style={{ fontSize: '40px', color: '#fff' }} />
                    </div>
                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            marginBottom: '8px',
                            color: '#fff',
                        }}
                    >
                        Portfolio Admin
                    </h1>
                    <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '15px', margin: 0 }}>
                        Sign in to manage your portfolio dashboard
                    </p>
                </div>

                {/* Login Form */}
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark={false}
                >
                    <Form.Item
                        name="email"
                        label={<span style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>Email Address</span>}
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined style={{ color: 'rgba(255, 255, 255, 0.5)' }} />}
                            placeholder="your.email@example.com"
                            style={{
                                height: '48px',
                                borderRadius: '12px',
                                fontSize: '15px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label={<span style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>Password</span>}
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined style={{ color: 'rgba(255, 255, 255, 0.5)' }} />}
                            placeholder="Enter your password"
                            style={{
                                height: '48px',
                                borderRadius: '12px',
                                fontSize: '15px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                            }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Remember me</span>
                                </Checkbox>
                            </Form.Item>
                            <a
                                href="#"
                                style={{
                                    color: '#7CCF00',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    message.info('Password reset feature coming soon');
                                }}
                            >
                                Forgot password?
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: '16px' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            block
                            style={{
                                height: '52px',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '600',
                                background: 'linear-gradient(135deg, #7CCF00 0%, #5a9900 100%)',
                                border: 'none',
                                boxShadow: '0 8px 20px rgba(124, 207, 0, 0.3)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 28px rgba(124, 207, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(124, 207, 0, 0.3)';
                            }}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In to Dashboard'}
                        </Button>
                    </Form.Item>

                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px', margin: 0 }}>
                            🔒 Protected by enterprise-grade security
                        </p>
                    </div>
                </Form>
            </div>

            {/* Add CSS for input placeholders and focus states */}
            <style>{`
                .ant-input::placeholder,
                .ant-input-password input::placeholder {
                    color: rgba(255, 255, 255, 0.4) !important;
                }
                
                .ant-input:focus,
                .ant-input-password input:focus,
                .ant-input-affix-wrapper:focus,
                .ant-input-affix-wrapper-focused {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: #7CCF00 !important;
                    box-shadow: 0 0 0 2px rgba(124, 207, 0, 0.1) !important;
                }

                .ant-input-affix-wrapper {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                }

                .ant-input-affix-wrapper:hover {
                    border-color: rgba(124, 207, 0, 0.5) !important;
                }

                .ant-checkbox-inner {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                }

                .ant-checkbox-checked .ant-checkbox-inner {
                    background: #7CCF00 !important;
                    border-color: #7CCF00 !important;
                }

                .ant-form-item-explain-error {
                    color: #ff6b6b !important;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;
