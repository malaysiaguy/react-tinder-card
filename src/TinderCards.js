import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import {
    Container,
    Col,
    Row,
} from 'reactstrap'
import './TinderCards.css'

function TinderCards({imageUrls}) {

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
       <div className='tinderCards'>
           <div className='cardContainer'>
           {
                imageUrls.filter(imgUrl =>
                    (
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'potrait' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'employment' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'marathon' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'academic' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'race' &&
                        imgUrl.substring(imgUrl.indexOf('F') + 1).split('-')[0] !== 'bib'
                    ))
                    .map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'employment').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h3 className='mb-3' style={{ color: 'yellow' }}>
                            {url.substring(url.indexOf('F') + 1).split('-')[0]}
                        </h3>
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'blue'}}>
                            {
                                url.substring(url.indexOf('F') + 1).substring(11).split('.')[0].replace(/_/g, ' ')
                            }
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'marathon').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h3 className='mb-3' style={{ color: 'yellow' }}>
                            {url.substring(url.indexOf('F') + 1).split('-')[0]}
                        </h3>
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'blue'}}>
                            {
                                url.substring(url.indexOf('F') + 1).substring(9).split('.')[0].replace(/_/g, ' ')
                            }
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'academic').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h3 className='mb-3' style={{ color: 'yellow' }}>
                            {url.substring(url.indexOf('F') + 1).split('-')[0]}
                        </h3>
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'blue'}}>
                            {
                                url.substring(url.indexOf('F') + 1).substring(9).split('.')[0].replace(/_/g, ' ')
                            }
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'race').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h3 className='mb-3' style={{ color: 'yellow' }}>
                            {url.substring(url.indexOf('F') + 1).split('-')[0]}
                        </h3>
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'blue'}}>
                            {
                                url.substring(url.indexOf('F') + 1).substring(5).split('.')[0].replace(/_/g, ' ')
                            }
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'bib').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <h3 className='mb-3' style={{ color: 'yellow' }}>
                            {url.substring(url.indexOf('F') + 1).split('-')[0]}
                        </h3>
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', align: 'justify', color: 'blue'}}>
                            {
                                url.substring(url.indexOf('F') + 1).substring(4).substring('_').split('.')[0].replace(/_/g, ' ')
                            }
                            </h3>
                        </div>
                    </TinderCard>
                ))
            }
           {
                imageUrls.filter(url => url.substring(url.indexOf('F') + 1).split('-')[0] === 'potrait').map((url, key) => (
                    <TinderCard
                        className="swipe"
                        key='key'
                        onSwipe={(dir) => swiped(dir, url)}
                        onCardLeftScreen={() => outOfFrame(url)}
                    >
                        <div
                            style={{ backgroundImage: `url(${url})`, width: '350px', height: '500px' }}
                            className='cardTinder mb-3'
                        >
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    );
}

export default TinderCards