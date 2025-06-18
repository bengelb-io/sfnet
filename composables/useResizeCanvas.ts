import type p5 from "p5";

export default (elementRef: Ref<HTMLElement>) => {
    const client = useContainerClient()
    return (p: p5) => {
        p.resizeCanvas();
    };
};
