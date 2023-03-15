//import { useDispatch } from 'react-redux'
//import { deleteAchievement } from '../features/achievement/achievementSlice'
//import { format } from 'date-fns'
import {
    Table,
    Button
} from 'reactstrap'
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function AchievementItem({award}) {
//    const dispatch = useDispatch()

    return (
        <tbody>
            <tr key={award._id}>
                <td className='td col-sm-2 text-warning'>
                    <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                        { (award.years).toDate() }
                    </SimpleDateTime>
                </td>
                <td className='td col-sm-5 text-warning'>{award.name}</td>
                <td className='td col-sm-5 text-warning'>{award.organization}</td>
            </tr>
        </tbody>
    )
}

export default AchievementItem