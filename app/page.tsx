"use client"
import { useContext } from 'react';
import { DLContext } from '@/lib/datalayer/dlcontext';
import { DataLayer } from '@/lib/types';

export default function Home() {
    const dl: DataLayer = useContext( DLContext )
    return <pre>{JSON.stringify(dl, null, 2)}</pre>;
}
