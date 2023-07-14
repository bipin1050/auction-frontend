export type FieldTypesProps = {
    label: string
    inputTypes : string
    name : string
    inputStyles : string
    value : string
    handleChange : (e:React.ChangeEvent<HTMLInputElement>) => void
}