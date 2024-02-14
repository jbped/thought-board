import Image from 'next/image';

interface LoadingProps {
  type: 'default' | 'black' | 'white' | 'blue';
}

export default function Loading({ type = 'default' }: LoadingProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src={`/logo/logo-${type}.svg`}
        alt="Logo"
        width={150}
        height={150}
        className='animate-pulse duration-1000'
      />
    </div>
  );
}
