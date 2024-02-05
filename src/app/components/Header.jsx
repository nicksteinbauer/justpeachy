import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="mainHeader">
      <Link href='/'>
        <Image
            src="/JustPeachy.svg"
            alt="Just Peachy"
            className='dropShadow logo'
            width={200}
            height={200}
            priority
        />
      </Link>
    </header>
  )
}
