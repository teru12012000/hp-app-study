import type { Meta, StoryObj } from "@storybook/react"
import { LinkBtn } from "@/components/linkButton"

const meta = {
    title: "LinkBtn",
    component: LinkBtn,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LinkBtn>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}
