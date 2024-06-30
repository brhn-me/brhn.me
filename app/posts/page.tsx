import Posts from 'app/components/Posts'

export const metadata = {
  title: 'Posts',
  description: 'Posts by K H M Burhan Uddin',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Posts</h1>
      <Posts />
    </section>
  )
}
