import { NextRequest } from 'next/server';
import { httpClient } from '@/lib/httpClient';

export async function GET(req: NextRequest) {
  const BASE_URL = process.env.BACKEND_BASE_URL;
  return httpClient(req, `${BASE_URL}/users/info`);
}