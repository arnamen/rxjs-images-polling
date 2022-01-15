export {}

declare global {
    class process {
        static env: Record<string, string | undefined>
    }
}