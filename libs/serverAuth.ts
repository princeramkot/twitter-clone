import { NextApiRequest, NextApiResponse } from 'next';

import prisma from './prismadb';
import { GET as authOptions } from '../app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  } 
  else{
    console.log("im logged in ");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;