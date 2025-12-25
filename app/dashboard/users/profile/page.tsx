'use client';

import { useUserQuery } from '@/hooks/useUser';
import { Card, Descriptions, Button, Spin, Alert } from 'antd';

export default function UserProfilePage() {
  const { data: user, isLoading, isError, refetch, error } = useUserQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-xl mx-auto mt-20">
        <Alert
          message="Error"
          description={error?.message || 'Failed to fetch user info'}
          type="error"
          showIcon
        />
      </div>
    );
  }

  if (!user?.data) {
    return (
      <div className="max-w-xl mx-auto mt-20">
        <Alert message="No data found" type="warning" showIcon />
      </div>
    );
  }

  const { uuid, name, user_id, email, phone, type, created_at, updated_at } = user.data;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card title="User Profile">
        <Descriptions column={1} bordered size="middle">
          <Descriptions.Item label="UUID">{uuid}</Descriptions.Item>
          <Descriptions.Item label="Name">{name}</Descriptions.Item>
          <Descriptions.Item label="User ID">{user_id}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{phone || '-'}</Descriptions.Item>
          <Descriptions.Item label="Type">{type || '-'}</Descriptions.Item>
          <Descriptions.Item label="Created At">{new Date(created_at).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="Updated At">{new Date(updated_at).toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <div className="mt-4 flex justify-end">
          <Button type="primary" onClick={() => refetch()}>
            Refresh
          </Button>
        </div>
      </Card>
    </div>
  );
}
