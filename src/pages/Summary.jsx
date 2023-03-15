import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import {
    NavLink,
    Table,
    Button
} from 'reactstrap'
import { FaElementor } from 'react-icons/fa'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import ExperienceItem from '../components/ExperienceItem'
import SkillItem from '../components/SkillItem'
import useSortableData from '../features/useSortableData'

function Summary() {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const [ experienceFB, setExperienceFB ] = useState([])
    const [ skillFB, setSkillFB ] = useState([])
    const { items: experienceSummariesItems, requestSort: experienceSummariesRS } = useSortableData(experienceFB)
    const { items: skillSummaryitems, requestSort: skillSummaryRS } = useSortableData(skillFB)

    useEffect( () => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        await getDocs(collection(db, "skillsummaries"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setSkillFB(newData);
        })
    }

    useEffect( () => {
        fetchExperiences()
    }, [])

    const fetchExperiences = async () => {
        await getDocs(collection(db, "experiencesummaries"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setExperienceFB(newData);
        })
    }

{/*    if(isLoadingSkill && isLoadingExperience) {
        return <Spinner />
    }
*/}
    return (
    <>
        <MainScreen isOpen={show} toggle={handleToggle} title1='SUMMARY' title2='简报' title3='RINGKASAN'>
            {
                experienceSummariesItems ? (
                    <CustomAccordion header='Working Experience 工作经验 Pengalaman Pekerjaan'
                        children={
                            <Table responsive striped>
                                <thead bgcolor='grey'>
                                    <tr>
                                        <th className='th col-sm-9' onClick={() => experienceSummariesRS('experience')}>Description</th>
                                        <th className='col-sm-3' onClick={() => experienceSummariesRS('years')}>No of Years</th>
                                    </tr>
                                </thead>
                                 {
                                    experienceSummariesItems.map((summary, key) => (
                                        <ExperienceItem key={key} summary={summary} />
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
                skillSummaryitems ? (
                    <CustomAccordion header='Skill Sets 技能 Kemahiran'
                        children={
                            <Table responsive striped>
                                <thead bgcolor='grey'>
                                    <tr>
                                        <th className='th col-sm-9' onClick={() => skillSummaryRS('skill')}>Description</th>
                                        <th className='col-sm-9' onClick={() => skillSummaryRS('years')}>No of Years</th>
                                    </tr>
                                </thead>
                                {
                                    skillSummaryitems.map((summary, key) => (
                                        <SkillItem key={key} summary={summary} />
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
        </MainScreen>
    </>
    )
}

export default Summary
