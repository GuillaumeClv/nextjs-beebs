import { getAccessType } from "../lib/data";
import { Select } from "./Select";

export async function Navbar () {
    const accessTypes = getAccessType()

    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 max-w-90">
            <Select accessTypes={accessTypes} />
        </div>
    )
}