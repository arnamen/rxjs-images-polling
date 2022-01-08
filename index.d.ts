export {}

declare global {
    interface process {
        env: Record<string, string>
    }
}