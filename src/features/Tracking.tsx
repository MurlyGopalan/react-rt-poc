import { useVesselsQuery } from "../services/api";
import { Menu } from "./Menu";

export const  Tracking = () => {

    const {data, error, isLoading, isFetching, isSuccess} = useVesselsQuery();

    return (
        <div >
            <Menu /> 
            <h1>Tracking Page !</h1>

            {isLoading && <h2>Loading ... </h2>}
            {error && <h2>Error ...</h2> }
            {isFetching && <h2>Is Fetching ..</h2>}
            {isSuccess && (
                <div >
                    {data?.map(vessel => {
                        return <div className = "data" key={vessel.id}>
                                <span>{vessel.name}</span>
                                </div>
                    })} 
                </div>
            )}
        </div>
    )    

}