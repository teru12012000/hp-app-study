import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import { LinkBtn } from "@/components/ui/linkButton"

const meta = {
    title: "components/ui/LinkBtn",
    component: LinkBtn,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LinkBtn>

export default meta

type Story = StoryFn<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = () => {
    return <LinkBtn />
}
