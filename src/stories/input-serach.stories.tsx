import { InputSearch } from '@/components/input-search';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Form/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-full h-96 flex items-center justify-center'>
      <div className="w-6/12 flex">
        <InputSearch
          placeholder="Search..."
          {...args}
        />
      </div>
    </div>
  )
};
