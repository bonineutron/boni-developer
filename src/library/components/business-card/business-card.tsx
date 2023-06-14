export function BusinessCard() {
  return (
    <div className='w-[90%] p-[30px] flex flex-col items-center justify-center gap-[15px] mx-auto bg-white/40 backdrop-blur-xl rounded-xl'>
      <div id='presentation'>Hola soy...</div>
      <div id='graphics'>Graficos</div>
      <div id='message'>Mensaje</div>
    </div>
  );
}
