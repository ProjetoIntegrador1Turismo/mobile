

const truncatedUserName = (userName: string, maxNameLength: number) => {
    return userName.length > maxNameLength
    ? `${userName.substring(0, maxNameLength)}...`
    : userName;
}


export { truncatedUserName }