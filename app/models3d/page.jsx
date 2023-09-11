import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";


export default function page() {

  const data = [
    {"name": "Torus", "path": "torus", "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Tesseract_torus.png"},
    {"name": "Sphere", "path": "sphere", "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sphere_wireframe_10deg_6r.svg/1200px-Sphere_wireframe_10deg_6r.svg.png"},
    {"name": "Cone", "path": "cone", "url": "https://cdn-icons-png.flaticon.com/512/204/204494.png"},]

  return (
    <main className="bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory z-0 overflow-hidden">
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-3 items-center h-96">
        {data?.map(item => {
          return (
            <Link
              href={`/models3d/${item.path}`}
              key={item.name}
              className="overflow-hidden rounded-md flex flex-center justify-center"
            >
              <div>
                <Image
                  src={item.url}
                  alt=""
                  className="transition-all duration-500 hover:scale-105 hover:-rotate-12 "
                  width={100}
                  height={100}
                />
                <h2 className="pt-4 flex justify-center text-gray-300 tracking-[6px]">{item.name}</h2>
              </div>
            </Link>
          )
        })}
      </Container>
    </main>
  )
}
