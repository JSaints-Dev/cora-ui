import { PrivateLayout } from '@/components/private-layout';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

const meta = {
  title: 'Components/PrivateLayout',
  component: PrivateLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PrivateLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className='flex justify-center items-center h-full'>
        <h1 className='text-3xl font-bold'>Content</h1>
      </div>
    ) as ReactNode,
  },
  render: (args) => (
    <PrivateLayout {...args} />
  ),
};
