import Link from "next/link";


export default function Index() {

  console.log("Hello?")
  return (
    <div className="mt-10">
      <h1>Chao App</h1>
      <Link href="/home">Home</Link>
    </div>
  )
}
