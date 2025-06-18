export default (elementRef: Ref<HTMLElement | undefined>) => {
    const client = ref({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    });

    onMounted(() => {
        if (elementRef.value) {
            const observer = new ResizeObserver(([entry]) => {
                client.value = entry.contentRect
            });
            observer.observe(elementRef.value);
        }
    });

    return client;
};
