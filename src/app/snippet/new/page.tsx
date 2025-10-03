import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const page = () => {
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
