import {titleMenu} from '../constants/index'

const TitleBar = () => {

  return (
    <div className="bg-cyan-200 flex justify-between items-center min-h-14 flex-1 px-10" >
      <div>
        <h1 className="text-2xl" >Weather</h1>
      </div>
      <div className='flex gap-3'>
        {titleMenu.map((icon, index) => (
          <div className='w-7' key={index} >
            <a href={icon.href}><img src={icon.imgurl} width={22} height={22} /></a>
          </div>
        ))}
        <div><p>UserName</p></div>
      </div>
    </div>
  )
}

export default TitleBar;
