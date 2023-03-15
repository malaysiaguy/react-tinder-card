import {
    Table,
    Button
} from 'reactstrap'

function ProjectItem({item}) {

    return (
            <tr key={item._id}>
                <td className='td col-sm-1 text-warning'>{item.projectItem}</td>
                <td className='td col-sm-2 text-warning'>{item.projectRole}</td>
                <td className='td col-sm-3 text-warning'>{item.projectName}</td>
                <td className='td col-sm-4 text-warning'>
                    <textarea className='textarea text-warning bgImage'
                        rows='10' cols='50'
                        value={`${item.projectDetails}`} readOnly={true}>
                    </textarea>
                </td>
                <td className='td col-sm-2 text-warning'>{item.projectDuration}</td>
            </tr>
    )
}

export default ProjectItem