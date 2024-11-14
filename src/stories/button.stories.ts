import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Cora: Story = {
  args: {
    children: 'Cora Button',
    variant: 'cora',
  },
};

export const CoraOutline: Story = {
  args: {
    children: 'Cora Outline Button',
    variant: 'cora-outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Icon: Story = {
  args: {
    children: '⭐️',
    size: 'icon',
  },
};

export const DestructiveLarge: Story = {
  args: {
    children: 'Destructive Large Button',
    variant: 'destructive',
    size: 'lg',
  },
};

export const GhostSmall: Story = {
  args: {
    children: 'Ghost Small Button',
    variant: 'ghost',
    size: 'sm',
  },
};
