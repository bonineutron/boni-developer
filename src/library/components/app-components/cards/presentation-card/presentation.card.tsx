import { ISkills } from 'interfaces';
import { Image } from 'components';

interface Props {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  skills: ISkills[];
}

export function PresentationCard({ title, subTitle, description, image, skills }: Props): JSX.Element {
  // styles
  const progressContainer: string = 'h-[7px] w-full rounded-full border-[1px] border-black overflow-hidden mt-[3px]';
  const barProgress: string = 'h-full bg-black';

  return (
    <div className='h-[480px] w-[90%] max-w-[400px] p-[20px] flex flex-col justify-around mx-auto rounded-lg overflow-hidden shadow-md bg-white sm:px-[24px]'>
      <div>
        <h2 className='text-[30px] font-medium leading-none mb-1'>{title}</h2>
        <h1 className='text-[18px] italic leading-none'>{subTitle}</h1>
        <div className='h-[1px] w-full bg-black rounded-full my-[8px]' />
        <p className='custom-paragraph'>{description}</p>
      </div>
      <div className='h-fit w-full flex justify-center gap-[15px] min-[410px]:gap-[30px]'>
        <Image src={image} alt='presentation-picture' height='150px' width='150px' className='rounded-md' />
        <div className='h-full w-full max-w-[150px] flex flex-col justify-between font-medium leading-none'>
          {skills.map((skill, index) => (
            <div key={`skill_${index}`}>
              <h3>{skill.label}</h3>
              <div className={progressContainer}>
                <div className={barProgress} style={{ width: skill.progressPercentage }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}