import React, { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode,
}

// Old way - not using in react 18
/*export const Section: React.FC<{ title: string }> = ({ children, title }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}*/


export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
} 