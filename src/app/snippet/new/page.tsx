import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import React from 'react'

const page = () => {
    async function createSnippet(formdata: FormData){
        "use server" // this is a server action
        const title = formdata.get("title") as string
        const code = formdata.get("code") as string

        await prisma.snippet.create({})
    }
  return (
    <form className='flex flex-col gap-10'>
    <div className='flex gap-4'>
      <label>Title</label>
      <Input type='text' name='title' placeholder='Title' id='title'/>
    </div>
    <div className='flex gap-4'>
      <label>Code</label>
      <Textarea id='code' name='code' placeholder='Add code here...'  />
    </div>
    <Button type="submit" className='my-6 w-20'>New</Button>
    </form>
  )
}

export default page
