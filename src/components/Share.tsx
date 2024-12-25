"use client"

import Image from "@/components/image";
import {ChangeEvent, useState} from "react";
import {shareAction} from "@/actions/actions";
import NextImage from "next/image";
import Editor from "@/components/editor";

const Share = () => {
      const [media, setMedia] = useState<File |null >(null);
      const [editorOpen, setEditorOpen] = useState(false);
      const [settings, setSettings] = useState<{
            type:"original"|"wide"|"square" ;
            sensitive:boolean;
      }>({
            type:'original',
            sensitive:false,
      })
      const handleMediaChange = (e:ChangeEvent<HTMLInputElement>)=>{
            if(e.target.files && e.target.files[0]){
                  setMedia(e.target.files[0]);
            }
      };
      const previewUrl = media ? URL.createObjectURL(media) : null;
      return (
          <form action={formData=>shareAction(formData,settings)} className='p-4 flex gap-4'>
                <div className='relative size-10 rounded-full overflow-hidden'>
                      <Image path='general/avatar.png' alt='avatar' tr={true} w={100} h={100} />
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                      <input name='desc' placeholder='What is happening?!' type='text' className='bg-transparent outline-none placeholder:text-textGray text-xl' />

                      { media?.type.includes('image') &&
                            previewUrl &&
                          <div className='relative rounded-xl overflow-hidden'>
                              <NextImage src={previewUrl} alt='preview' width={600} height={600}
                                         className={`w-full ${settings.type == 'original' ? 'h-full object-contain' : settings.type === 'square' ? 'aspect-square object-cover' : 'aspect-video object-cover'}`}/>
                              <div
                                  className='absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 py-1 font-bold text-sm cursor-pointer rounded-full'
                                  onClick={() => setEditorOpen(true)}>Edit
                              </div>
                              <div
                                  className='absolute top-2 right-2 cursor-pointer font-bold text-sm bg-black bg-opacity-50 text-white size-8 flex items-center justify-center rounded-full'
                                  onClick={() => setMedia(null)}>X
                              </div>

                          </div>
                      }
                      {
                          editorOpen && previewUrl &&
                          <Editor onClose={() => setEditorOpen(false)} previewUrl={previewUrl} settings={settings}
                                  setSettings={setSettings}/>
                      }
                      {media?.type.includes('video') &&previewUrl && <div className='relative'>
                          <video src={previewUrl} controls/>
                          <div className='absolute top-2 right-2 cursor-pointer font-bold text-sm bg-black bg-opacity-50 text-white text-center flex size-8 items-center justify-center rounded-full' onClick={()=>setMedia(null)}>X</div>
                          </div>
                      }

                      <div className=' flex items-center justify-between gap-4 flex-wrap'>
                            <div className='flex gap-4 flex-wrap '>
                                  <input type='file' name='file' accept='image/*,video/**' onChange={handleMediaChange} hidden id='file'/>
                                  <label htmlFor='file'>
                                    <Image path='icons/image.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                                  </label>
                                  <Image path='icons/gif.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                                  <Image path='icons/poll.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                                  <Image path='icons/emoji.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                                  <Image path='icons/schedule.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                                  <Image path='icons/location.svg' alt='icons' w={20} h={20} className='cursor-pointer'/>
                            </div>
                            <button className='bg-white text-black font-bold rounded-full py-2 px-4'>Post</button>
                      </div>
                </div>
          </form>
      )
}
export default Share
