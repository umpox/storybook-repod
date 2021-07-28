import React from 'react'

import { Container } from './Container'

const Story = {
    title: 'example/Container',

    parameters: {
        component: Container,
    },
}

export default Story

export const ContainerExample = () => (
    <>
        <Container>
            Some content
        </Container>
    </>
)
