import { useTranslation } from 'react-i18next';
import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';

interface ParagraphProps {
  paragraph: string;
  limit: number;
  children: JSX.Element;
}

export function SeeMoreInformation({ paragraph, limit, children }: ParagraphProps): JSX.Element {
  // configuration
  const { t } = useTranslation();
  const splitParagraph: string[] = paragraph.split(' '); // to get the total number of words within this paragraph
  const limitWords: string[] = splitParagraph.slice(0, limit); // limit the number of words in the paragraph
  const joinWords: string = limitWords.join(' '); // join the words that were limited to generate a new paragraph

  // states
  const [showMoreInformation, setShowMoreInformation] = useState<boolean>(false);

  // styles
  const paragraphClass: string = 'custom-paragraph';

  if (splitParagraph.length > limit) {
    return (
      <div className='h-fit w-full'>
        <p className={paragraphClass}>
          {showMoreInformation ? joinWords : joinWords}
          <button
            onClick={() => {
              setShowMoreInformation(true);
            }}
            className='font-medium underline italic underline-offset-[3px] ml-[5px] active:text-gray-200'>
            {t('generics.see-more')}
          </button>
        </p>
        <div
          className={`absolute card justify-between top-0 h-full w-full z-[2] transition-all duration-200 ${
            showMoreInformation ? 'left-0' : 'left-[-100%]'
          }`}>
          {children}
          <div className='h-fit w-full flex justify-center active:text-gray-200'>
            <button
              onClick={() => setShowMoreInformation(false)}
              className='text-[18px] font-medium italic flex items-center'>
              <span>{t('generics.close')}</span>
              <VscClose className='text-[30px]' />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <p className={paragraphClass}>{paragraph}</p>;
}
