import Projects from 'app/components/Projects'

export const metadata = {
  title: 'Projects',
  description: 'Projects by K H M Burhan Uddin',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <Projects />
    </section>
  )
}
