import React from 'react';
import '../../App.css';


export default function Info() {
    return (
    <>
        <div className="information-container">
            <h1>What is Web Accessibility?</h1>
            <br />
            <section className="information-content">
                <p> Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact with the Web. This encompasses all disabilities that affect access to the Web, including:</p>
                <br/>
                <ul>
                    <li>auditory</li>
                    <li>cognitive</li>
                    <li>neurological</li>
                    <li>physical</li>
                    <li>speech</li>
                    <li>visual</li>
                </ul>
                <br /><br />
                <p>Web accessibility also benefits people without disabilities, for example:</p>
                <br/>
                <ul>
                    <li>people using mobile phones, smart watches, smart TVs, and other devices with small screens, different input modes, etc.</li>
                    <li>older people with changing abilities due to ageing</li>
                    <li>people with “temporary disabilities” such as a broken arm or lost glasses</li>
                    <li>people with “situational limitations” such as in bright sunlight or in an environment where they cannot listen to audio</li>
                    <li>people using a slow Internet connection, or who have limited or expensive bandwidth</li>
                </ul>
                <br/>
                <p>Check out the 'Resources' page for helpful tools to provide Access for All!</p>
            </section>
        </div>
    </>
    )
}