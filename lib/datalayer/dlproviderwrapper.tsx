import datalayer from "./datalayer"
import DLProvider from "./dlcontext"

export async function DLProviderWrapper({children}: {children: React.ReactNode}){
    const dl = await datalayer()
    return <DLProvider init={dl}>{children}</DLProvider>
}