'use client';
import { useQuery } from '@tanstack/react-query';
import { userApi } from '@/lib/api/user';
import { UserResponse } from '@/types/user';

export function useUserQuery() {
  return useQuery<UserResponse, Error>({
    queryKey: ['user'],
    queryFn: userApi.info,
    // staleTime: 1000 * 60 * 5,
  });
}
