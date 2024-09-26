import Link from "next/link"

type props = {
    Title: string,
    Icon: React.ElementType,
    Address: string
}
export default function MenuItems({Title, Icon, Address}: props){
    return <Link href={Address} className="flex justify-center items-center gap-2">
        <Icon className="text-2xl" />
        <p className="hidden sm:inline"> { Title } </p>        
    </Link>
}