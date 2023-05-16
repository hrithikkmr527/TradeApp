import { Link, useParams } from "react-router-dom";

export default function ItemsPage(){
    const {action} = useParams()

    return (
        <div>

        {action !=='new' && (
            <div className="text-center mt-4">
            <Link className="bg-primary text-black text-center py-2 px-6 rounded-full " to={'/account/items/new'}>Add new Item</Link>
        </div>
        )}
        {
            action==='new' && (
                <div>
                    <form>
                        <h2 className="text-2xl mt-4">Title</h2>
                        <input type="text" placeholder="name" />
                        <h2 className="text-2xl mt-4"> Description</h2>
                        <input type="text" placeholder="Description" />
                        <h2 className="text-2xl mt-4">Photos</h2>
                    </form>
                </div>
            )
        }
        </div>
       
    )
}