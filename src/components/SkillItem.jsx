import {
    Table,
    Button
} from 'reactstrap'

function SkillItem({summary, key}) {
    return (
        <tbody>
            <tr key={key}>
                <td className='td col-sm-9 text-warning'>{summary.skill}</td>
                <td className='col-sm-3 text-warning'>{summary.years}</td>
            </tr>
        </tbody>
    )
}

export default SkillItem