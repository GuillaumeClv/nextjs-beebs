import Link from "next/link";

export default function DefaultRevenuePage() {
    return (
        <>
            <h1>My Default RevenuePage</h1> 
            <Link href="/dashboard/archived">archived</Link>
        </>
    )
}