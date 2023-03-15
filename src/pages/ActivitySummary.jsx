import { useEffect, useState } from 'react'
import {
    NavLink,
    Table,
    Col,
    Row,
    Card,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'
import { FaHiking } from 'react-icons/fa'
import MainScreen from '../components/MainScreen'
import CustomAccordion from '../components/CustomAccordion'
import useSortableData from '../features/useSortableData'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'
import { storage } from '../firebase'
import {
    ref,
    getDownloadURL,
    listAll,
    list,
} from 'firebase/storage'
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import TinderCards from '../TinderCards'

function ActivitySummary() {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const [imageUrls, setImageUrls] = useState([])
    const imagesListRef = ref(storage, 'bibs/')
    const [imageRaceUrls, setImageRaceUrls] = useState([])
    const imagesRaceListRef = ref(storage, 'races/')
    const [imageMarathonUrls, setImageMarathonUrls] = useState([])
    const imagesMarathonListRef = ref(storage, 'marathons/')
    const [ activitiesFB, setActivitiesFB ] = useState([])
    const { items: activitiesItems, requestSort: activitiesRS } = useSortableData(activitiesFB)

    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
//                    console.log(url)
                    setImageUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesRaceListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
//                    console.log(url)
                    setImageRaceUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        listAll(imagesMarathonListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
//                    console.log(url)
                    setImageMarathonUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect( () => {
        fetchActivities()
    }, [])

    const fetchActivities = async () => {
        await getDocs(collection(db, "activities"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setActivitiesFB(newData);
        })
    }

    return (
    <>
        <MainScreen toggle={handleToggle} title1='ACTIVITY SUMMARY' title2='活动简报' title3='RINGKASAN AKTIVITI'>
        {
            activitiesItems ? (
                <CustomAccordion header='Social Activity 社交活动 Aktiviti Masyarakat' children={
                    <Table responsive striped>
                        <thead bgcolor='grey'>
                            <tr>
                                <th className='th col-sm-2' onClick={() => activitiesRS('years')}>Year</th>
                                <th className='th col-sm-8' onClick={() => activitiesRS('details')}>Details</th>
                                <th className='th col-sm-2' onClick={() => activitiesRS('location')}>Location</th>
                            </tr>
                        </thead>
                         {
                            activitiesItems.filter((activity) => activity.activityType === 'social').map((activity) => (
                            <tbody key={activity._id}>
                                <tr>
                                    <td className='td col-sm-2 text-warning'>
                                        <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (activity.years).toDate() }
                                        </SimpleDateTime>
                                    </td>
                                    <td className='td col-sm-8 text-warning'>{activity.details}</td>
                                    <td className='td col-sm-2 text-warning'>{activity.location}</td>
                                </tr>
                            </tbody>
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
                activitiesItems ? (
                    <CustomAccordion header='Outdoor Activity 户外活动 Aktiviti Luar'
                        children={
                        <Table responsive striped>
                            <thead bgcolor='grey'>
                                <tr>
                                    <th className='th col-sm-2' onClick={() => activitiesRS('years')}>Year</th>
                                    <th className='th col-sm-8' onClick={() => activitiesRS('details')}>Details</th>
                                    <th className='th col-sm-2' onClick={() => activitiesRS('location')}>Location</th>
                                </tr>
                            </thead>
                             {
                                activitiesItems.filter((activity) => activity.activityType !== 'social').map((activity) => (
                                <tbody key={activity._id}>
                                    <tr>
                                        <td className='td col-sm-2 text-warning'>
                                            <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">
                                            { (activity.years).toDate() }
                                            </SimpleDateTime>
                                        </td>
                                        <td className='td col-sm-8 text-warning'>{activity.details}</td>
                                        <td className='td col-sm-2 text-warning'>{activity.location}</td>
                                    </tr>
                                </tbody>
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
            <CustomAccordion header='Marathon Activity 赛跑运动 Aktiviti Perlumbaan' children={
                <Row className='text-center g-4'>
                    <Col className='col-lg-12'>
                        <h3 style={{ color: 'cyan' }}>Please Swipe the Photos 请滑动相片 Sila Leret Foto</h3>
                    </Col>
                    {
                        imageUrls.length > 0 ? (
                        <Col className='col-lg-4'>
                            <h3 style={{ color: 'red' }}>Marathon Bib 号码布 Bib Perlumbaan</h3>
                            <TinderCards imageUrls={imageUrls}></TinderCards>
                        </Col>
                    ) : (
                        <div>
                            <h3 style={{ color: 'yellow' }}>
                                There is no image yet.
                            </h3>
                        </div>
                        )
                    }
                    {
                        imageRaceUrls.length > 0 ? (
                        <Col className='col-lg-4'>
                            <h3 style={{ color: 'red' }}>Racing Photos 赛跑相片 Foto Perlumbaan</h3>
                            <TinderCards imageUrls={imageRaceUrls}></TinderCards>
                        </Col>
                    ) : (
                        <div>
                            <h3 style={{ color: 'yellow' }}>
                                There is no image yet.
                            </h3>
                        </div>
                        )
                    }
                    {
                        imageMarathonUrls.length > 0 ? (
                        <Col className='col-lg-4'>
                            <h3 style={{ color: 'red' }}>Marathon Medals 赛跑奖牌 Pingat Perlumbaan</h3>
                            <TinderCards imageUrls={imageMarathonUrls}></TinderCards>
                        </Col>
                    ) : (
                        <div>
                            <h3 style={{ color: 'yellow' }}>
                                There is no image yet.
                            </h3>
                        </div>
                        )
                    }
                </Row>
            } item='accordionItem3'>
            </CustomAccordion>
        </MainScreen>
    </>
    )
}

export default ActivitySummary
