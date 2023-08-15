import { SettingsItem } from '@/utils/constants/SettingsItems'
import Link from 'next/link'

const Settings = () => {
  return (
    <section className='flex justify-center'>
        <div className='w-3/4 my-12 h-96 bg-white p-5 flex items-center justify-evenly flex-wrap shadow-md'>
        {
            SettingsItem.map(([title, icon, url], index) =>(
                <Link key={index} href={url} 
                    className='font-bold text-white w-2/3 lg:w-1/6 h-16 text-center flex items-center justify-center rounded-md bg-red-400'>
                    <i className={icon}>&nbsp;</i>
                {title}
                </Link>
            ))
        }
        </div>
    </section>
  )
}

export default Settings