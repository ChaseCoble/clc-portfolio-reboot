'use client'
import { createContext, useState } from "react"
import type { DataLayer, EnrichedArticle, EnrichedProject } from "../types"

export const DLContext = createContext<DataLayer>({
    articles: {} as Record<string, EnrichedArticle>,
    projects: {} as Record<string, EnrichedProject>,
    tags: {} as Record<string, string[]>
})
export default function DLProvider({
    children,
    init
}: {
    children: React.ReactNode,
    init: DataLayer
}){
    const [dl, setDl] = useState<DataLayer>(init)
    return (<DLContext.Provider value={dl}> {children} </DLContext.Provider>)
}

