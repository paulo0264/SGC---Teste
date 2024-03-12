import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
// import { Text } from '@/components/ui/text'
import { Link } from 'react-router-dom'

export function App() {
  return (
    <>
      <Card className=" min-h-[85vh] grid grid-cols-12">
        <main className="col-span-7 col-start-6 grid grid-rows-4 grid-cols-7">
          <section className=" min-w-16 min-h-16 row-start-2 row-span-2 col-start-2 col-span-5">
            <div className="max-w-[350px] flex flex-col  gap-4">
              <Link to="/dashboard?show=overwiew" title="ir para dashboard">
                <Button className="w-full bg-[#2563eb] hover:opacity-95 hover:bg-[#2563eb]">
                  <p>ir para dashboard</p>
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </Card>
    </>
  )
}
