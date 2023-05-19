import type { NextApiRequest, NextApiResponse } from 'next'
import * as cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const cookieValue = req.headers.authorization;

  if(!cookieValue) {
    res.status(400).json({ message: 'authorization header not found' });
    return;
  };

  res.setHeader('Set-Cookie', cookie.serialize('accessToken', cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600,
    path: '/'
  }));

  res.status(200).json({ message: 'Login successful' });
}