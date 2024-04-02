import type { Meta, StoryFn } from "@storybook/react"
import { BackButton } from "@/components/ui/backButton"

const meta = {
    title: "components/ui/BackButton",
    component: BackButton,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof BackButton>

export default meta

type Story = StoryFn<typeof meta>

export const Bacic: Story = () => {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
            }}
        >
            <BackButton />
        </div>
    )
}
