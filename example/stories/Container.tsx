import React from 'react'

interface Props {
    className?: string
}

export const Container: React.FunctionComponent<Props> = ({ children, className }) => <div className={className}>{children}</div>
