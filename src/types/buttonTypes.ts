export type ButtonProps = {
    value: string
    styles ?: string
    handleClick : (event: React.MouseEvent<HTMLButtonElement>)=> void
}