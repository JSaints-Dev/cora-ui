import React from 'react';
import { Input } from '@/components/input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const IsError: Story = {
  args: {
    type: 'text',
    placeholder: 'Error input',
    error: 'Error message',
    label: 'Label',
  }
};

export const White: Story = {
  render: (args) => (
    <div className='flex bg-brand-primary p-4'>
      <Input
        type="text"
        placeholder="Error input..."
        error="Error message"
        label="Label"
        variant="white"
        {...args}
      />
    </div>
  )
};
