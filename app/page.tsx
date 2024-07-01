import Social from './components/Social';
import Image from 'next/image';
import coverImage from 'app/assets/covers/cover1.jpg'; 

export default function Page() {
  return (
    <section>
      <p className="mb-4 text-left">
        Hi 👋 <br /><br />
        I am <strong>Burhan</strong>. I am currently pursuing my Master's in Artificial Intelligence specialization at the University of Oulu.
        Previously, I have worked at a Nordic AI startup. During my undergrad, our team built the first-ever Bengali search engine, 
        securing significant funding. My current research interests include federated learning and knowledge distillation with multimodal data.
      </p>
      <div className="my-8">
        <Social />
      </div>
      <div className="my-8 flex flex-col items-center">
        <Image 
          src={coverImage} 
          alt="Burhan Uddin" 
          width={896} 
          height={896} 
          placeholder="blur"
          className="rounded-lg"
        />
        <div className="mt-2 text-gray-700 dark:text-neutral-400 ">The best view comes after the hardest climb!!</div>
      </div>
    </section>
  );
}
