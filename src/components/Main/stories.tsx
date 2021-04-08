import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    // Definindo props par todas as stories
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Abaixo override dos props para essa story específica
Basic.args = { title: 'Título principal', description: 'Alguma descrição' }
