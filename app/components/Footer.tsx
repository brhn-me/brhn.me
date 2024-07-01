export default function Footer() {
  return (
    <footer className="flex justify-between items-center mb-16">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
