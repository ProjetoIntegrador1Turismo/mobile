
const truncatedPointName = (pointName: string, maxNameLength: number) => {
    return pointName.length > maxNameLength
    ? `${pointName.substring(0, maxNameLength)}...`
    : pointName;
}


export { truncatedPointName }