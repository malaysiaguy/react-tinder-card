import { useEffect, useState } from 'react'
import {
    Table,
    Button
} from 'reactstrap'
import {
    Col,
    Row
} from 'reactstrap'
import TinderCard from 'react-tinder-card'
import { storage } from '../firebase'
import {
    ref,
    getDownloadURL,
    listAll,
    list,
} from 'firebase/storage'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import useSortableData from '../features/useSortableData'
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import TinderCards from '../TinderCards'

function History() {
    const [ academicFB, setAcademicFB ] = useState([])
    const [ courseworkFB, setCourseworkFB ] = useState([])
    const [ skillFB, setSkillFB ] = useState([])
    const { items: knowledgesitems, requestSort: requestSortKnowledge } = useSortableData(skillFB)
    const { items: courseworkitems, requestSort: requestSortCoursework } = useSortableData(courseworkFB)
    const { items: academicsitems, requestSort: requestSortAcademic } = useSortableData(academicFB)
    const [imageUrls, setImageUrls] = useState([])
    const imagesListRef = ref(storage, 'academic-cert/')

    useEffect( () => {
        fetchAcademics()
    }, [])

    const fetchAcademics = async () => {
        await getDocs(collection(db, "academics"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setAcademicFB(newData);
        })
    }

    useEffect( () => {
        fetchCourseworks()
    }, [])

    const fetchCourseworks = async () => {
        await getDocs(collection(db, "courseworks"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setCourseworkFB(newData);
        })
    }

    useEffect( () => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        await getDocs(collection(db, "knowledges"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setSkillFB(newData);
        })
    }

    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <MainScreen title1='HISTORY' title2='历史' title3='SEJARAH'>
        {
            courseworkitems ? (
                <CustomAccordion header='Coursework 课程作业 Kerja Kursus' children={
                    <Row className='text-justify g-4'>
                        <Col className='col-lg-12'>
                            <Table responsive striped>
                                <thead bgcolor='grey'>
                                    <tr>
                                        <th className='th col-sm-3' onClick={() => requestSortCoursework('years')}>Year</th>
                                        <th className='th col-sm-4' onClick={() => requestSortCoursework('name')}>Name</th>
                                        <th className='th col-sm-5' onClick={() => requestSortCoursework('details')}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {
                                    courseworkitems.map((course) => (
                                    <tr key={`${course._id}`}>
                                        <td className='td col-sm-3 text-warning'>{course.years}</td>
                                        <td className='td col-sm-4 text-warning'>{course.name}</td>
                                        <td className='td col-sm-5 text-warning'>{course.details}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    } item='accordionItem1'>
                    </CustomAccordion>
                ) : (
                <div>
                    <h3 style={{ color: 'yellow' }}>
                        Coming soon ...
                    </h3>
                </div>
            )}
        {
            academicsitems ? (
                <CustomAccordion header='Education 教育 Pendidikan' children={
                    <Row className='text-justify g-4'>
                        <Col className='col-lg-8'>
                            <Table responsive striped>
                                    <thead bgcolor='grey'>
                                        <tr>
                                            <th className='th col-sm-1' onClick={() => requestSortAcademic('years')}>Year</th>
                                            <th className='th col-sm-3' onClick={() => requestSortAcademic('name')}>Institution</th>
                                            <th className='th col-sm-4' onClick={() => requestSortAcademic('qualification')}>Qualification</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {
                                        academicsitems.map((academic) => (
                                            <tr>
                                                <td className='td col-sm-1 text-warning'>
                                                    <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                                    { (academic.years).toDate() }
                                                    </SimpleDateTime>
                                                </td>
                                                <td className='td col-sm-3 text-warning'>{academic.name}</td>
                                                <td className='td col-sm-4 text-warning'>{academic.qualification}</td>
                                            </tr>
                                    ))}
                                    </tbody>
                            </Table>
                        </Col>
                        <Col className='col-lg-4'>
                        {
                            imageUrls.length > 0 ? (
                                <>
                                <h3 style={{ color: 'cyan' }}>Please Swipe the Photos 请滑动相片 Sila Leret Foto</h3>
                                <TinderCards imageUrls={imageUrls}></TinderCards>
                                </>
                        ) : (
                            <div>
                                <h3 style={{ color: 'yellow' }}>
                                    There is no image yet.
                                </h3>
                            </div>
                            )
                        }
                        </Col>
                    </Row>
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
            knowledgesitems ? (
                <CustomAccordion header='General Knowledge 普通知识 Pengetahuan Am' children={
                    <Row className='text-justify g-4'>
                        <Col className='col-lg-12'>
                            <Table responsive striped>
                                <thead bgcolor='grey'>
                                    <tr>
                                        <th className='th col-sm-3' onClick={() => requestSortKnowledge('knowledge')}>Knowledge</th>
                                        <th className='th col-sm-4' onClick={() => requestSortKnowledge('level')}>Proficiency</th>
                                        <th className='th col-sm-5' onClick={() => requestSortKnowledge('knowledgeType')}>Type of Knowledge</th>
                                    </tr>
                                </thead>
                                 {
                                    knowledgesitems.map((skill) => (
                                    <tbody>
                                        <tr key={`${skill._id}`}>
                                            <td className='td col-sm-3 text-warning'>{skill.knowledge}</td>
                                            <td className='td col-sm-4 text-warning'>{skill.level}</td>
                                            <td className='td col-sm-5 text-warning'>{skill.knowledgeType}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </Table>
                        </Col>
                    </Row>
                } item='accordionItem3'>
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

export default History
