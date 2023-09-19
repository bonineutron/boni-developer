import { Detail, Image } from 'components';
import { ISkills } from 'interfaces';

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
    <div className='card'>
      <Detail title={title} subTitle={subTitle} description={description} />
      <div className='h-fit w-full flex justify-center gap-[15px] min-[410px]:gap-[30px]'>
        <Image src={image} alt='presentation-picture' height='150px' width='150px' className='rounded-lg' />
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
