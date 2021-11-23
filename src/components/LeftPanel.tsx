import { Link } from 'react-router-dom';
import useDataDetch from '../hooks/useData';
import { FOLDERS_PATH } from './../Consts';



export default function LeftPanel() {


    const { data, isLoading, isError } = useDataDetch<[string]>(FOLDERS_PATH)

    if (isLoading) return <div>loading...</div>
    if (isError) return <div>Error: failed to load data from URL: {FOLDERS_PATH}</div>


    return (
        <div className="navPanelLeft" >
            {data?.map(folderName => <Link title={folderName} key={folderName} to={`/folders/${folderName}`}>{folderName}</Link>)}
        </div>
    )
}
