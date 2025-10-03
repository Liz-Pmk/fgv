export {};

declare global {
    interface Window {
        ScrollReveal?: () => {
            reveal: (selector: string, options: Record<string, unknown>) => void;
        };
        Chart?: new (
            ctx: HTMLCanvasElement,
            config: Record<string, unknown>
        ) => {
            destroy: () => void;
        };
    }
}
