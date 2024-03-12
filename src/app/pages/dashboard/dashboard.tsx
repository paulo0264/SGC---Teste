import { Card } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { useLocation } from 'react-router-dom'
import { TableWithListClients } from './components/table-cliente-list'
import { FormAddCliente } from './components/formAddClient'
import { TableListRouter } from './components/table-rotas-list'
import Navbar from './components/navbar'

export function Dashboard() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const showParam = queryParams.get('show')
  return (
    <>
      <Navbar />
      <Card className="py-7 min-h-screen grid grid-cols-12 grid-rows-12">
        <header className=" row-span-1 col-span-12 flex items-start justify-start flex-col">
          <div className="flex justify-start flex-col items-start gap-5">
            <Text className="text-start">Dashboard</Text>
          </div>
        </header>
        {showParam === 'overwiew' && <TableWithListClients />}
        {showParam === 'routers' && <TableListRouter />}
        {showParam === 'form' && (
          <main className="row-span-9 row-start-3 col-start-4 col-span-6">
            <FormAddCliente.Root />
          </main>
        )}
      </Card>
    </>
  )
}
