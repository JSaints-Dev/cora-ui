import { Logo } from '@/components/logo';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-9'>
      <Logo {...args} />
    </div>
  ),
};

export const Full: Story = {
  render: (args) => (
    <div className='w-48 bg-brand-primary p-8'>
      <Logo variant='full' {...args} />
    </div>
  ),
};
