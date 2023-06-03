import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '../../../libs/serverAuth';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {

  try {
    const { currentUser } = await serverAuth(req, res);
    return NextResponse.json( {currentUser},{status: 200});
    
  } catch (error) {
    console.log(error);
    return NextResponse.json( 'internal error ',{status: 500});

  }
}