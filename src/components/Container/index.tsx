// Development
import { ReactNode } from "react"

interface containerProps {
    children: ReactNode
}

export function Container({ children }: containerProps) {
    return(
        <>
            <div className="w-full mx-auto md:max-w-7xl">
                { children }
            </div>
        </>
    )
}