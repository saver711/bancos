"use client"
import { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

type CustomInputProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  label: string
  placeholder: string
}

const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder
}: CustomInputProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <div className="form-item">
          {/* htmlFor & input id should be handled automatically by shadcn but i encountered an issue with this */}
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={
                  name === "password"
                    ? "password"
                    : name === "email"
                    ? "email"
                    : "text"
                }
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}
export default CustomInput
