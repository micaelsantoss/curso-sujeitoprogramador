import type { ReactNode } from "react"

export function Button({children, onClick, disabled}: {
    children: ReactNode,
    onClick: () => void,
    disabled: boolean
}){
    return(
        <button 
            onClick={onClick}
            style={{
                padding: 6,
                color: "#121212",
                backgroundColor: disabled ? "#fbfb" : "#fff"
            }}
        >
            {children}
        </button>
    )
}