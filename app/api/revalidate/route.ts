import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        const secret = req.headers.get('x-revalidate-secret');
        if (secret !== process.env.REVALIDATE_SECRET) {
            return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
        }
        console.log('Revalidation triggered by Webhook: ', payload);
        const tag = payload.tag;
        revalidateTag(tag, 'max');
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Webhook Error: ', err);
        return NextResponse.json({ ok: false, error: 'Bad Request' }, { status: 400 });
    }
}
