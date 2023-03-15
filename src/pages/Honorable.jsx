import { useEffect, useState } from 'react'
import {
    Table,
    Button
} from 'reactstrap'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import AchievementItem from '../components/AchievementItem'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import useSortableData from '../features/useSortableData'

function Honorable() {
    const [ achievementsFB, setAchievementsFB ] = useState([])
    const { items, requestSort } = useSortableData(achievementsFB)
    const { items: achievementItems, requestSort: achievementRS } = useSortableData(achievementsFB)

    useEffect( () => {
        fetchAchievements()
    }, [])

    const fetchAchievements = async () => {
        await getDocs(collection(db, "achievements"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setAchievementsFB(newData);
        })
    }

    return (
        <MainScreen title1='ACHIEVEMENT' title2='成就' title3='PENCAPAIAN'>
            {
                achievementItems.length > 0 ? (
                    <CustomAccordion header='Employment 职业 Pekerjaan' children={
                        <Table responsive striped={true}>
                            <thead bgcolor='grey'>
                                <tr>
                                    <th className='th col-sm-2'  onClick={() => achievementRS('years')}>Year</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('name')}>Description</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('organization')}>Organization</th>
                                </tr>
                            </thead>
                            {
                                achievementItems.filter(award => award.awardType === 'employment').map((award) => (
                                <AchievementItem key={award._id} award={award} />
                            ))}
                        </Table>
                    } item='accordionItem1'>
                    </CustomAccordion>
                ) : (
                    <div>
                        <h3 style={{ color: 'yellow' }}>
                            Coming soon ...
                        </h3>
                    </div>
                ) }
            {
                achievementItems.length > 0 ? (
                    <CustomAccordion header='Academic 学业 Akademik' children={
                        <Table responsive striped={true}>
                            <thead bgcolor='grey'>
                                <tr>
                                    <th className='th col-sm-2' onClick={() => achievementRS('years')}>Year</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('name')}>Description</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('organization')}>Organization</th>
                                </tr>
                            </thead>
                            {
                                achievementItems.filter(award => award.awardType === 'academic').map((award) => (
                                <AchievementItem key={award._id} award={award} />
                            ))}
                        </Table>
                    } item='accordionItem2'>
                    </CustomAccordion>
                ) : (
                    <div>
                        <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                    </div>
                ) }
            {
                achievementItems.length > 0 ? (
                    <CustomAccordion header='Photography 摄影 Fotografi' children={
                        <Table responsive striped={true}>
                            <thead bgcolor='grey'>
                                <tr>
                                    <th className='th col-sm-2' onClick={() => achievementRS('years')}>Year</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('name')}>Description</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('organization')}>Organization</th>
                                </tr>
                            </thead>
                            {
                                achievementItems.filter(award => award.awardType === 'photography').map((award) => (
                                <AchievementItem key={award._id} award={award} />
                            ))}
                        </Table>
                    } item='accordionItem3'>
                    </CustomAccordion>
                ) : (
                    <div>
                        <h3 style={{ color: 'yellow' }}>
                            Coming soon ...
                        </h3>
                    </div>
                ) }
            {
                achievementItems.length > 0 ? (
                    <CustomAccordion header='Marathon 赛跑 Perlumbaan' children={
                        <Table responsive striped={true}>
                            <thead bgcolor='grey'>
                                <tr>
                                    <th className='th col-sm-2' onClick={() => achievementRS('years')}>Year</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('name')}>Description</th>
                                    <th className='th col-sm-5' onClick={() => achievementRS('organization')}>Organization</th>
                                </tr>
                            </thead>
                            {
                                achievementItems.filter(award => award.awardType === 'marathon').map((award) => (
                                <AchievementItem key={award._id} award={award} />
                            ))}
                        </Table>
                    } item='accordionItem4'>
                    </CustomAccordion>
                ) : (
                    <div>
                        <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                    </div>
                ) }
        </MainScreen>
    )
}

export default Honorable
