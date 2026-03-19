export function isInsideClassAttribute(line: string, cursor: number): boolean {
    const beforeCursor = line.slice(0, cursor);

    return (
        beforeCursor.includes('class="') || beforeCursor.includes(':class="')
    );
}
