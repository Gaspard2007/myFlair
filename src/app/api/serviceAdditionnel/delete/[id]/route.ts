import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const url = req.url;
    console.log(url)
    const segments = url?.split('/').filter(Boolean);

    const idService = 'clxevgydj000b1vl2rwusd1iw'
    console.log(idService)

    try {
      

      await prisma.additionalService.delete({
        where: { id: idService },
      });

      // Réponse en cas de succès
      return NextResponse.json({ message: 'Service successfully deleted' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting service:', error);
      return NextResponse.json({ error: 'An error occurred while deleting the service' }, { status: 500 });
    }
  } else {
    // Réponse pour les méthodes non autorisées
    res.setHeader('Allow', ['DELETE']);
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}

export const runtime = 'experimental-edge';
