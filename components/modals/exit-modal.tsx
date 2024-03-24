'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useExitModal } from '@/store/use-exit-modal'

export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal()

  useEffect(() => setIsClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_sad.svg" alt="Mascote" height={80} width={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Espere, não vá!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Você está prestes a sair da lição. Você tem certeza?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={close}
            >
              Continue aprendendo
            </Button>
            <Button
              variant="dangerOutline"
              size="lg"
              className="w-full"
              onClick={() => {
                close()
                router.push('/learn')
              }}
            >
              Fechar sessão
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
