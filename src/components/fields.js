import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function StringField({ form, name, label, placeholder, className, inputClassName, multiline, ...props}) {
  const inputProps = {
    placeholder: placeholder || label,
  }
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {multiline ? (
              <Textarea placeholder={placeholder || label} className={cn("resize-none", inputClassName)} {...props} {...field} />
            ) : (
              <Input placeholder={placeholder || label} {...props} className={inputClassName} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}