import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request, res: NextApiResponse) {
  
  try { 
  
    const { email, username, name, password } =await request.json();

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      }
    });
    
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json( 'internal error ',{status: 500});
  }
}