// Root.tsx

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'
import { Schema, useCustomForm } from './useFormsAddClient'
import { useAddNewClient } from '@/hook/useAddNewClient'
import { Button } from '@/components/ui/button'

export function Root() {
  const { handleSubmit, register, errors, reset } = useCustomForm()
  const { fecth } = useAddNewClient()
  const onSubmit = async (data: Schema) => {
    await fecth(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Label>
        <Text className="text-sm text-start my-3">Nome</Text>
        <Input {...register('nome')} placeholder={'Leonardo arruda'} />
        <div className="py-3">
          {errors.nome?.message && <p>{errors.nome?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Email</Text>
        <Input
          {...register('email')}
          placeholder={'leonardo.dev@hotmail.com'}
        />
        <div className="py-3">
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Telefone</Text>
        <Input {...register('telefone')} placeholder={'00 00000-0000'} />
        <div className="py-3">
          {errors.telefone?.message && <p>{errors.telefone?.message}</p>}
        </div>
      </Label>
      <div className="my-5 flex items-center justify-start">
        <Button
          type="submit"
          className="cursor-pointer bg-blue-500 hover:bg-blue-400"
        >
          <Text className=" text-white text-center text-base ">Enviar</Text>
        </Button>
      </div>
    </form>
  )
}
