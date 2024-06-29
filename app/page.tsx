import Social from './components/social';
import Image from 'next/image';
import coverImage from '../public/images/cover.jpg'; 

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Hi 👋 <br /><br />
        I am <strong>Burhan</strong>. I am currently pursuing my Master's in Artificial Intelligence specialization at the University of Oulu.
        Previously, I have worked at a Nordic AI startup. During my undergrad, our team built the first-ever Bengali search engine, 
        securing significant funding. My current research interests include federated learning and knowledge distillation with multimodal data.
      </p>
      <div className="my-8">
        <Social />
      </div>
      <div className="my-8">
        <Image 
          src={coverImage} 
          alt="Burhan Uddin" 
          width={500} 
          height={500} 
          placeholder="blur"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}