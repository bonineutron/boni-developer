export function BusinessCard() {
  return (
    <div className='flex flex-col items-center justify-center gap-[20px] leading-none text-black-boni'>
      <div className='w-full text-[20px]'>
        <h2>Hola, soy</h2>
        <h1 className='text-[35px] font-medium text-primary-color my-2'>Andrés Bonilla</h1>
        <h2>Front-end Developer</h2>
      </div>
      <div className='w-full flex gap-[20px]'>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt='photo'
          className='w-[50%] rounded-lg'
        />
        <div className='w-full flex flex-col justify-between font-medium text-[16px]'>
          <div>
            <h3 className='mb-1'>React:</h3>
            <div className='relative h-[4px] w-full bg-[#bbdefb] rounded-full'>
              <div className='absolute h-[4px] w-[80%] bg-primary-color rounded-full' />
            </div>
          </div>
          <div>
            <h3 className='mb-1'>Angular:</h3>
            <div className='relative h-[4px] w-full bg-[#bbdefb] rounded-full'>
              <div className='absolute h-[4px] w-[60%] bg-primary-color rounded-full' />
            </div>
          </div>
          <div>
            <h3 className='mb-1'>React Native:</h3>
            <div className='relative h-[4px] w-full bg-[#bbdefb] rounded-full'>
              <div className='absolute h-[4px] w-[70%] bg-primary-color rounded-full' />
            </div>
          </div>
          <div>
            <h3 className='mb-1'>Flutter:</h3>
            <div className='relative h-[4px] w-full bg-[#bbdefb] rounded-full'>
              <div className='absolute h-[4px] w-[30%] bg-primary-color rounded-full' />
            </div>
          </div>
        </div>
      </div>
      <p className='text-[18px] leading-[26px]'>
        En este sitio iré registrando parte de mi experiencia, la cual me ha aportado bastante progreso en lograr ser el
        profesional que quiero ser.
      </p>
    </div>
  );
}
