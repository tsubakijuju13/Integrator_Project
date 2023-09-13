import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo h-11 w-11 ">
      <Link href={'/'}>
        <img src="/assets/images/react.png"  alt="logo" className="animate-rotate" />
      </Link>
        
    </div>
  )
}
