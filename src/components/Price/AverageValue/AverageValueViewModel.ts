export function useAverageValueIcons(value: number): Array<null> {
    let iconCount = 0;

    if (value < 150) {
        iconCount = 1;
    } else if (value >= 150 && value < 300) {
        iconCount = 2;
    } else {
        iconCount = 3;
    }

    return Array(iconCount).fill(null);
}